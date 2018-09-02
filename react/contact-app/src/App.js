import React, { Component } from "react";
import "./App.css";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
class App extends Component {
  id = 0;

  state = {
    information: [],
    serachName: ""
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
    this.setState({
      information: this.state.information.map(info => {
        if (info.id === data.id) {
          return { ...data };
        }
        return info;
      })
    });
  };
  handlingSearchName = e => {
    this.setState({
      serachName: e.target.value
    });
  };
  render() {
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate} />
        <input
          placeholder="검색..."
          value={this.state.serachName}
          onChange={this.handlingSearchName}
        />
        <PhoneInfoList
          data={this.state.information.filter(
            data => data.name.indexOf(this.state.serachName) > -1
          )}
          handleRemove={this.handleRemove}
          handleUpdate={this.handleUpdate}
        />
      </div>
    );
  }
}

export default App;
