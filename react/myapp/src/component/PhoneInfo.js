import React, {Component} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
    static defaultProps = {
      data:[]
    };



    render(){
        const {info} = this.props.data;
        const {handlingRemove, handlingChange} = this.props;
        console.log('rendering list');
        const list = info.map(data=>{
           return <PhoneInfoList info={data}
                                 handlingRemove={handlingRemove}
                                 handlingChange={handlingChange}/>
        });
        return(
            <div>
                {list}
            </div>
        )
    }
}


export default PhoneInfo;
