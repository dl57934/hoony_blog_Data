import React, {Component, Fragment} from 'react';
import PhoneInfoList from "./PhoneInfoList";

class PhoneInfo extends Component {
    render() {
        const info = this.props.data;
        const {onRemove} = this.props;
        const {onChange} = this.props;
        console.log(info);
        const list = info.map(data=>{
            return(
                <Fragment>
                <PhoneInfoList info={data} onRemove={onRemove} onChange={onChange}/>
                </Fragment>
            )
        });
        return (
            <div>
            {list}
            </div>
        );
    }

}


export default PhoneInfo;
