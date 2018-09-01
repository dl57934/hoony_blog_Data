import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  defaultProps = {
    data: []
  };
  render() {
    const { data, handleRemove } = this.props;
    const list = data.map(info => (
      <PhoneInfo info={info} key={info.id} handleRemove={handleRemove} />
    ));
    return <div>{list}</div>;
  }
}

export default PhoneInfoList;
