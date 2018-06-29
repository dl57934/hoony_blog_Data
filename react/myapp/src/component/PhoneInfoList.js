import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {

    handleRemove = ()=>{
        const {info, onRemove} = this.props;
        onRemove(info.id);
    };
    handleEditTogging=()=>{
        //false->True
        const {editing} = this.state;
        const {onUpdate, info} = this.props;
        if(editing) {
            onUpdate(info.id,
                {
                    name:this.state.phone,
                    phone:this.state.name
                })
        }else{
            this.setState({
                name:info.name,
                phone:info.phone
            });
        }

        this.setState({
            editing:!editing
        })
    }

    state ={
      editing:false,
        name:'',
        phone:''
    };
    style = {
        border:'solid black 1px',
        padding:'8px',
        margin:'8px'
    };
    onHandleChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    };
    render(){
        const {name, phone, id} = this.props.info;
        const {onRemove} = this.props;
        const {editing} = this.state;
        console.log(name);
        console.log(phone);
        return(<div style={this.style}>
            {
                editing ? (
                    <Fragment><input name={'name'} value={this.state.name} onChange={this.onHandleChange}/><br/>
                    <input name={'phone'} value={this.state.phone} onChange={this.onHandleChange}/>
                    <br/></Fragment>
                )
                    : (<Fragment>{name}<br/>
                    {phone}<br/></Fragment>)
            }
            <button onClick={()=>{
                onRemove(id)}}>삭제</button>
            <button onClick={this.handleEditTogging}>
                {editing? '적용':'수정'}
            </button>
        </div>)
    }
}

export default PhoneInfoList;
