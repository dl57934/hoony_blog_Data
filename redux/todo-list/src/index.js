import { createStore } from "redux";

const ADD = "ADD";
const REMOVE = "REMOVE";

const content = document.getElementById("content");
const form = document.querySelector("form");
const contentList = document.querySelector("ul");

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD: {
      return [{ text: action.text, id: Date.now() }, ...state];
    }
    case REMOVE: {
      return [...state.filter(data => data.id != action.id)];
    }
    default:
      return state;
  }
  ㅇ;
};

const store = createStore(reducer);

const addTodo = todo => {
  return {
    type: ADD,
    text: todo
  };
};

const removeTodo = id => {
  return {
    type: REMOVE,
    id
  };
};

const dispatchAddTODO = todo => {
  store.dispatch(addTodo(todo));
};

const dispatchRemoveTODO = e => {
  store.dispatch(removeTodo(e.target.parentNode.id));
};

const paintContent = () => {
  const contents = store.getState();
  contentList.innerHTML = "";
  contents.map(data => {
    const { text, id } = data;
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.innerText = "DELETE";
    li.id = id;
    li.innerText = text;

    button.addEventListener("click", dispatchRemoveTODO);
    li.appendChild(button);
    contentList.appendChild(li);
  });
};

const onSubmit = e => {
  e.preventDefault();
  const todo = content.value;
  content.value = "";
  dispatchAddTODO(todo);
};

store.subscribe(paintContent);
form.addEventListener("submit", onSubmit);
