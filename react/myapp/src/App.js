import React, { Component } from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfo from "./component/PhoneInfo"

class App extends Component {
    state = {
        info: [],
        keyWord:''
    };
    id = 0;
    handlingFormClick = (data) => {
        const {info} =  this.state;
        this.setState({
            info:info.concat({
            ...data,
            id:this.id++
        })
        });
    };
    handlingRemove= (receiveId)=>{
        const {info} = this.state;
        this.setState({
            info:info.filter(data=>data.id !== receiveId)
        })
    };
    handlingChangeKeyword=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };
    handlingChange=(data)=>{
        const receiveData = data;
        const {info} = this.state;
        this.setState({
            info:info.map(data=>{
                if(receiveData.id === data.id){
                    return {
                        ...receiveData
                    }
                }
            })
        })
    };

    render() {
        return (
            <div>
                <PhoneForm pushClick={this.handlingFormClick}/>
                <input onChange={this.handlingChangeKeyword} value={this.state.keyWord} name={'keyWord'}/>
                <PhoneInfo data={this.state.info.filter(data=>{
                    return data.name.indexOf(this.state.keyWord) > -1
                })} onRemove={this.handlingRemove} onChange={this.handlingChange}/>
            </div>
        );
    }
}

export default App;
