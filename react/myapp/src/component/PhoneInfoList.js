import React, {Component,Fragment} from 'react';

class PhoneInfoList extends Component {
    style={
        border:'1px solid black',
        padding:'8px',
        margin:'8px',
    };
    handlingDelete = (e)=>{
        e.preventDefault();
        let key = e.target.key;
        const {deleteInfoData} = this.props;
        deleteInfoData(key);
    };
    render(){
        const {dataInformation} = this.props;
        return(<form style={this.style}>
            {dataInformation.name} <br/>
            {dataInformation.phone}<br/>
            <button onClick={this.handlingDelete}>삭제</button><button>수정</button>
            </form>)
}
}

export default PhoneInfoList;
