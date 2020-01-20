import _ from "lodash";

const component = () => {
  const element = document.createElement("h1");
  element.innerHTML = _.join(["Hello", "hoony_webpack"], " ");
  return element;
};

document.body.appendChild(component());
