const useInput = (initialValue, validator) => {
  const [value, changeValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;

    if (typeof validator === "function" && validator(value)) {
      changeValue(value);
    }
  };
  return { value, onChange };
};

const useTabs = (nowTabsIndex, allTabs) => {
  const [tabsIndex, setTabsIndex] = useState(nowTabsIndex);
  return { tabs: allTabs[tabsIndex], setTabsIndex };
};

const useTitle = initialTitle => {
  const [title, setTitle] = useState(initialTitle);
  const changeTitle = () => {
    const titleTag = document.querySelector("title");
    titleTag.innerText = title;
  };

  useEffect(changeTitle, [title]);

  return { setTitle };
};

const useClick = onClick => {
  const tagRef = useRef();

  useEffect(() => {
    if (tagRef.current) tagRef.current.addEventListener("click", onClick);

    return () => {
      if (tagRef.current) {
        tagRef.current.removeEventListener("click", onClick);
      }
    };
  }, []);

  return { tagRef };
};

const useConfirm = (message, callback, rejection) => {
  const detroyWorld = () => {
    if (confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };

  return detroyWorld;
};

const usePreventLeave = () => {
  const listener = event => {
    event.preventDefault();
    event.returnValue = "";
  };
  const destroyWorld = () => window.addEventListener("beforeunload", listener);
  const saveWorld = () => window.removeEventListener("beforeunload", listener);
  return { destroyWorld, saveWorld };
};

const useBeforeLeave = message => {
  const eventListener = event => {
    const { clientY } = event;
    if (clientY <= 0) {
      message();
    }
  };

  useEffect(() => {
    document.addEventListener("mouseleave", eventListener);
    return () => document.removeEventListener("mouseleave", eventListener);
  }, []);
};

const fadeIn = (duration, delay) => {
  const ref = useRef();
  useEffect(() => {
    const { current } = ref;
    current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
    current.style.opacity = 1;
  }, []);
  return { ref, style: { opacity: 0 } };
};

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);

  const handleChange = () => {
    onChange();
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);

    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);

  return status;
};

const useScroll = () => {
  const [state, setState] = useState({ x: 0, y: 0 });
  const scrlollHandler = () => {
    setState({ x: window.scrollX, y: window.scrollY });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrlollHandler);
    return () => window.removeEventListener("scroll", scrlollHandler);
  }, []);

  return state;
};

const useFullScreen = isFullScreen => {
  const element = useRef();
  const fullScreen = () => {
    if (element.current) element.current.requestFullscreen();
    isFullScreen(true);
  };
  const exitFullScreen = () => {
    document.exitFullscreen();
    isFullScreen(false);
  };
  return { element, fullScreen, exitFullScreen };
};

const useCallback = (title, option) => {
  const fire = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then(permission => {
        if (permission === "granted") {
          new Notification(title, option);
        } else return;
      });
    } else {
      new Notification(title, option);
    }
  };

  return fire;
};
