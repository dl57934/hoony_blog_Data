import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
class App extends Component {
  id = 0;

  state = {
    information: []
  };
  handleRemove = key => {
    console.log(key);
    this.setState({
      information: this.state.information.filter(data => data.id !== key)
    });
  };
  handleCreate = data => {
    const { information } = this.state;
    this.setState({
      information: information.concat({
        ...data,
        id: this.id++
      })
    });
  };
  handleUpdate = data => {
    console.log("App.js: ", data);
    console.log("App.js 2: ", this.state.information);
    this.setState({
      information: this.state.information.map(info => {
        if (info.id === data.id) {
          return { ...data };
        }
        return info;
      })
    });
  };
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <PhoneInfoList
          data={this.state.information}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
