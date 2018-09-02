import React, { Component, Fragment } from "react";

class PhoneInfo extends Component {
  state = {
    editing: true,
    name: "",
    phone: ""
  };

  handlingRemove = () => {
    const { info, handleRemove } = this.props;
    handleRemove(info.id);
  };
  handingEdit = () => {
    //true 등록된 모습
    //수정 툴
    const { info, handleUpdate } = this.props;

    if (this.state.editing) {
      this.setState({
        name: info.name,
        phone: info.phone
      });
    } else {
      info.name = this.state.name;
      info.phone = this.state.phone;
      handleUpdate(info);
    }

    this.setState({
      editing: !this.state.editing
    });
  };
  handlingChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    let { phone, name } = this.props.info;
    let { editing } = this.state;
    const style = {
      border: "1px solid black",
      padding: "8px",
      margin: "8px"
    };

    return (
      <div style={style}>
        {editing ? (
          <Fragment>
            <b>{name}</b>
            <br />
            {phone}
            <br />
          </Fragment>
        ) : (
          <Fragment>
            <input
              name="name"
              value={this.state.name}
              onChange={this.handlingChange}
            />
            <br />
            <input
              name="phone"
              value={this.state.phone}
              onChange={this.handlingChange}
            />
            <br />
          </Fragment>
        )}
        <button onClick={this.handingEdit}>
          {editing ? "수정" : "수정 완료"}
        </button>
        <button onClick={this.handlingRemove}>삭제</button>
      </div>
    );
  }
}

export default PhoneInfo;
