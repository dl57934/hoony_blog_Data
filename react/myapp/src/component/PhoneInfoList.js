import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {
    style={
        border:'1px solid black',
        padding:'8px',
        margin:'8px',
    };
    handlingDelete = ()=>{
        
    };
    render(){
        const {dataInformation} = this.props;
        return(<form style={this.style}>
            {dataInformation.name} <br/>
            {dataInformation.phone}<br/>
            <button onClick={}>삭제</button><button onClick={}>수정</button>
            </form>)
}
}

export default PhoneInfoList;
