import React, {Component} from 'react';

class PhoneInfoList extends Component {
    style = {
        border:'solid black 1px',
        padding:'8px',
        margin:'8px'
    };

    render(){
        const {name, phone,id} = this.props.info;
        console.log(name);
        console.log(phone);
        return(<div style={this.style}>
            {name}<br/>
            {phone}
        </div>)
    }
}

export default PhoneInfoList;
