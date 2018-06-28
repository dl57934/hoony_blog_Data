import React, {Component, Fragment} from 'react';

class PhoneForm extends Component {
state = {
    name:'',
    phone:''
};

handlingChange= (e)=>{
    this.setState({
        [e.target.name]:e.target.value
    });
};

handlingSubmit= (e)=>{
    e.preventDefault();
    this.props.onCreate(this.state);
};

render(){
    return(<form onSubmit={this.handlingSubmit}>
            <input name={"name"} value={this.state.name} placeholder={'이름'} onChange={this.handlingChange}/>
            <input name={"phone"} value={this.state.phone} placeholder={'전화번호'} onChange={this.handlingChange}/>
            <button type={"submit"}>등록</button>
        </form>
    )
}
}



export default PhoneForm;
