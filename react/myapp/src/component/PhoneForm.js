import React, {Component, Fragment} from 'react';

class PhoneForm extends Component {
    state={
        name:'',
        phone:''
    };
    input = React.createRef();
    handlingChange =(e) =>{
    this.setState({
        [e.target.name]:e.target.value
    })
};
    handlingSubmit = (e)=>{
        e.preventDefault();
        const {pushClick} = this.props;
        pushClick(this.state);
        this.setState({
            name:'',
            phone:''
        })
        this.input.current.focus();
    };
    render(){
        return(<form onSubmit={this.handlingSubmit}>
            <b>이름</b><input name={'name'} value={this.state.name} onChange={this.handlingChange} placeholder={'이름'} ref={this.input}/>
            <b>전화번호</b><input name={'phone'} value={this.state.phone} onChange={this.handlingChange} placeholder={'전화번호'}/>
            <button type={'submit'}>등록</button>
            <br/>
        </form>)
    }
}



export default PhoneForm;
