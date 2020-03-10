import React from "react";
import { connect } from "react-redux";

const Detail = ({ todo }) => {
  return (
    <>
      <h1>{todo?.text}</h1>
      <h5>Create At: {todo?.id}</h5>
    </>
  );
};

const mapsStateToProps = (state, ownProps) => {
  const {
    match: {
      params: { id }
    }
  } = ownProps;
  return {
    todo: state.find(data => data.id === parseInt(id))
  };
};

export default connect(mapsStateToProps)(Detail);
