import React, { Component } from "react";

class PhoneInfo extends Component {
  handlingSubmit = e => {
    e.preventDefault();
    const { info } = this.props;
    this.props.handleRemove(info.id);
  };

  render() {
    const { name, phone, id } = this.props.info;

    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
      <div>
        <form onSubmit={this.handlingSubmit} style={style}>
          <b>{name}</b>
          <br />
          {phone}
          <br />
          <button type="submit">삭제</button>
        </form>
      </div>
    );
  }
}

export default PhoneInfo;
