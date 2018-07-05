import React, {Component, Fragment} from 'react';

class PhoneForm extends Component {
    state={
        name:'',
        phone:''
    };
    handlingChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handlingSubmit =(e)=>{
        e.preventDefault();
        const {handlingRegister} = this.props;
        handlingRegister(this.state);
    };
    render(){
      return(
          <form onSubmit={this.handlingSubmit}>
              <input name={'name'} onChange={this.handlingChange} value={this.state.value}/>
              <input name={'phone'} onChange={this.handlingChange} value={this.state.value}/>
              <button type={'submit'}>등록</button>
          </form>
      )
  }
}



export default PhoneForm;
