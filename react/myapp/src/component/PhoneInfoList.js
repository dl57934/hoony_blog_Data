import React, {Component} from 'react';
import PhoneForm from "./PhoneForm";

class PhoneInfoList extends Component {
    style = {
        border:'1px black solid',
        margin:'8px',
        padding:'8px'
    };
    render(){
        const {name, phone, key} = this.props.info;
        return(<div style={this.style}>
            {name}
            {phone}
        </div>)
    }
}

export default PhoneInfoList;
