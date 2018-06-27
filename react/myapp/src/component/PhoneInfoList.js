import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo'
class PhoneInfoList extends Component {
    static defaultProps = {
        data:[]
    };
    render() {
        const {data} = this.props;
        console.log(data);
        const list = data.map((info)=>{
           return <PhoneInfo info={info} key={info.id}/>}
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
