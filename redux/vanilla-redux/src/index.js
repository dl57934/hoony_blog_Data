import { createStore } from "redux";

const ADD = "ADD";
const MINUS = "MINUS";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const span = document.querySelector("span");

const countModifier = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const countRedux = createStore(countModifier);

const onChange = () => {
  span.innerText = countRedux.getState();
};

countRedux.subscribe(onChange);

plus.addEventListener("click", () => {
  countRedux.dispatch({ type: ADD });
});

minus.addEventListener("click", () => {
  countRedux.dispatch({ type: MINUS });
});
