import React, {Component, Fragment} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
  render(){
        const {dataInformation} = this.props;
        const {deleteInfoData} = this.props;
        return(dataInformation.map(data=>{
            return (<PhoneInfoList dataInformation={data} deleteInfoData={deleteInfoData}/>)
        }))

  }
}


export default PhoneInfo;
