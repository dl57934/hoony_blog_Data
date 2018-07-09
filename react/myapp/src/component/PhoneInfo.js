import React, {Component, Fragment} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
  render(){
        const {dataInformation} = this.props;
        return(dataInformation.map(data=>{
            return (<PhoneInfoList dataInformation={data}/>)
        }))

  }
}


export default PhoneInfo;
