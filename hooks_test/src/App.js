import React, { Component, Fragment } from "react";

class App extends Component {
  state = {
    count: 0
  };

  _increment = n => {
    this.setState({
      count: n
    });
  };

  render() {
    const { count } = this.state;
    return (
      <Fragment>
        <div>{count}</div>
        <button onClick={() => this._increment(count + 1)}>Increment</button>
      </Fragment>
    );
  }
}

export default App;
