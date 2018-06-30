import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {
    state={
      toggle :false,
        name:'',
        phone:'',
        searchName:''
    };

    style = {
        border:'solid black 1px',
        padding:'8px',
        margin:'8px'
    };
    handlingRemove =()=>{
        const {onRemove} = this.props;
        const {id} = this.props.info;
        onRemove(id);
    };
    handlingChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handlingToggle =()=>{
        const data = this.props.info;
        const {onChange} = this.props;
        if (this.state.toggle) {
            onChange({
                name:this.state.name,
                phone:this.state.phone,
                id:data.id
            });
        }else{
            this.setState({
                name: data.name,
                phone: data.phone
            });
        }
        this.setState({
            toggle:!this.state.toggle
        });
    };
    render() {

        const data = this.props.info;
        let {toggle} = this.state;
        return (
            <div style={this.style}>

                {
                    toggle? <Fragment>
                        <b>이름: </b><input name={'name'} onChange={this.handlingChange} value={this.state.name}  /><br/>
                        <b>번호: </b> <input name={'phone'} onChange={this.handlingChange} value={this.state.phone}/>
                    </Fragment>:<Fragment>
                        {data.name}<br/>
                        {data.phone}
                    </Fragment>
                }
                <br/>
                <button onClick={this.handlingToggle}>
                    {toggle? '등록':'변경'}
                    </button>
                <button onClick={this.handlingRemove}>삭제</button>
            </div>
        );
    }

}

export default PhoneInfoList;
