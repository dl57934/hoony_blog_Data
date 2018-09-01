import React, { Component } from 'react';

class PhoneForm extends Component {
    state = {
        name:'',
        phone:''
    }

    handlingchange = (e)=>{
        this.setState({
            name:e.target.value
        });
    }
    render() {
        return (
            <form>
                <input placeholder="이름" 
                onChange={this.handlingchange} 
                value={this.state.name}/>
                <input placeholder="전화번호" value/>
                {this.state.name}
            </form>
        );
    }
}

export default PhoneForm;