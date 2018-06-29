import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {
style={
    border:'solid black 1px',
    margin:'8px',
    padding:'8px'
};
state={
toggle:false,
    name:'',
    phone:''
};

handlingRemove = ()=>{
    const {id} = this.props.info;
    const {handlingRemove} = this.props;
    handlingRemove(id);
};
handlingEdit=()=>{
    const {name, phone, id} = this.props.info;
    const {handlingChange} = this.props;
    if(this.state.toggle){
        handlingChange({
            name:this.state.name,
            phone:this.state.phone
        }, id);
    }else{
        this.setState({
            name:name,
            phone:phone
        })
    }

    this.setState({
        toggle:!this.state.toggle
    })
};
handlingChange=(e)=>{
this.setState({
    [e.target.name]:e.target.value
})
};


    shouldComponentUpdate(nextProps, nextState) {
        if(nextState !== this.state) return true;
        return nextProps.info !== this.props.info
    }
render(){
    const {name, phone, id} = this.props.info;
    const {toggle} = this.state;
    console.log(name);
    return(<div style={this.style}>
        {toggle?
            <Fragment>
                <input name={'name'} value={this.state.name} onChange={this.handlingChange}/><br/>
                <input name={'phone'} value={this.state.phone} onChange={this.handlingChange}/><br/>
            </Fragment>:
            <Fragment>
                {name}<br/>
                {phone}
            </Fragment>
        }
        <button onClick={this.handlingRemove}>삭제</button>
        <button onClick={this.handlingEdit}>{toggle?'등록':'수정'}</button>

    </div>)
    }
}

export default PhoneInfoList;
