import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name:'',
        phone:''
    };

    handlingChange= (e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
    };
    handlingSubmit = (e)=>{
        e.preventDefault();
        this.props.onCreate(this.state);
    }
    render() {
        return (
            <form onSubmit={this.handlingSubmit}>
                <input name={"name"} value={this.state.name} onChange={this.handlingChange}/>
                <input name={"phone"} value={this.state.phone} onChange={this.handlingChange}/>
                <button type={"submit"}>등록</button>
                <br/>
                <b>이름: {this.state.name}</b>
                <br/>
                <b>핸드폰 번호: {this.state.phone}</b>
            </form>
        );
    }
}



export default PhoneForm;
