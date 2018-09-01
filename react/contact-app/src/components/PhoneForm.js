import React, { Component } from "react";

class PhoneForm extends Component {
  state = {
    name: "",
    phone: ""
  };

  handlingchange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlingSubmit = e => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: "",
      phone: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.handlingSubmit}>
        <input
          name="name"
          placeholder="이름"
          onChange={this.handlingchange}
          value={this.state.name}
        />
        <input
          name="phone"
          onChange={this.handlingchange}
          placeholder="전화번호"
          value={this.state.phone}
        />
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
