import React, { Component } from "react";
import FunctionComponent from "./FunctionComponent";

class App extends Component {
  render() {
    const numbers = [1, 2, 3, 4, 5, 6];
    return (
      <div className="App">
        {numbers.map(number => {
          return <FunctionComponent number={number} />;
        })}
      </div>
    );
  }
}

export default App;
