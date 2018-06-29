import React, {Component, Fragment} from 'react';

class PhoneForm extends Component {
    state={
      name:'',
      phone:''
    };
    handlingSubmit= (e)=>{
        const {onCreate} = this.props;
        e.preventDefault();
        onCreate(this.state);
    };
    handlingChange= (e)=>{
        this.setState({
           [e.target.name]:e.target.value
        });
    };
    render(){
        return(
            <form onSubmit={this.handlingSubmit}>
                <input name={'name'} onChange={this.handlingChange} value={this.state.name} placeholder={'이름을 입력하세요'}/>
                <input name={'phone'} onChange={this.handlingChange} value={this.state.phone} placeholder={'전화번호를 입력하세요'}/>
                <br/><button>등록</button>
            </form>
        )
    }
}



export default PhoneForm;
