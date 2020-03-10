import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

const Home = ({ toDos, addToDo, removeToDo }) => {
  console.log(toDos);
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };

  const onClick = e => {
    e.preventDefault();
    addToDo(text);
    setText("");
  };

  return (
    <>
      <h1>todo</h1>
      <form>
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <ul>
        {toDos.map((does, id) => (
          <ToDo key={id} {...does}></ToDo>
        ))}
      </ul>
    </>
  );
};

const mapStateToProps = state => {
  return { toDos: state };
};

const mapDispatchToProps = dispatch => {
  return {
    addToDo: text => dispatch(actionCreators.addTodo(text))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
