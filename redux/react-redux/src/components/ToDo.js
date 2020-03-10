import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import { Link } from "react-router-dom";

const ToDo = ({ text, id, remove }) => {
  return (
    <li>
      <Link to={`/${id}`}>
        {text} <button onClick={remove}>delete</button>
      </Link>
    </li>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);
  return {
    remove: () => dispatch(actionCreators.removeTodo(ownProps.id))
  };
};

export default connect(null, mapDispatchToProps)(ToDo);
