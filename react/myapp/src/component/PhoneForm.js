import React, {Component} from 'react';

class PhoneForm extends Component {
    state = {
        name:'',
        phone:'',
    }
    handleChange = (e)=>{
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name={"name"}
                    placeholder={"이름"}
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <input name={"phone"}
                       placeholder={"전화번호"}
                       onChange={this.handleChange}
                       value={this.state.phone}/>
                <button type={"submit"}>등록</button>
                <br/>
                <b>이름</b>{this.state.name}<br/>
                <b>전화 번호</b>{this.state.phone}
            </form>
        );
    }
}



export default PhoneForm;
