import React, {Component} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
    static defaultProps = {
        data:[]
    };
    render(){
        const {data, onRemove, onUpdate} = this.props;
        const list =  data.map(info =>{
               return <PhoneInfoList onUpdate={onUpdate} onRemove={onRemove} info={info} key={info.id}/>
            });
        return (<div>
            {list}
            </div>)
   }
}


export default PhoneInfo;
