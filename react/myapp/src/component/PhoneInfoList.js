import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {
    style={
        border:'1px solid black',
        padding:'8px',
        margin:'8px',
    };
    state ={
        name:'',
        phone:'',
        toggle:false,
    };
    handlingDelete = (e)=>{
        e.preventDefault();
        let key = e.target.key;
        const {deleteInfoData} = this.props;
        deleteInfoData(key);
    };
    handlingEdit = (e)=>{
        e.preventDefault();
        const {editInfoData} = this.props;
        const {dataInformation} = this.props;
        let {toggle} = this.state;
        if (toggle){
            editInfoData({
                name:this.state.name,
                phone:this.state.phone
            },dataInformation.key);
        }else{
            this.setState({
               name:dataInformation.name,
               phone:dataInformation.phone
            });
        }
       this.setState({
          toggle: !this.state.toggle
       });
    };
    handlingChange = (e)=>{
      this.setState({
          [e.target.name]:e.target.value
      })
    };
    render(){
        const {dataInformation} = this.props;
        let {toggle} = this.state;
        return(<form style={this.style}>
            {toggle? <div>
                    <input value={this.state.name} name={'name'} onChange={this.handlingChange}/><br/>
                    <input value={this.state.phone} name={'phone'} onChange={this.handlingChange}/><br/>
                </div>:
                <div>
                    {dataInformation.name} <br/>
                    {dataInformation.phone}<br/>
                    </div>}
            <button onClick={this.handlingDelete}>삭제</button><button onClick={this.handlingEdit}>수정</button>
            </form>)
    }
}

export default PhoneInfoList;
