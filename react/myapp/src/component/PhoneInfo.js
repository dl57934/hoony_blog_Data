import React, {Component} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
    render(){
        const {data} = this.props;
        const list = data.map(info=>{
                    return <PhoneInfoList info={info} key={info.id}/>
                }
            );
        return (<div>
            {list}
        </div>)
    }
}


export default PhoneInfo;
