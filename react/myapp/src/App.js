import React, {Component} from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfo from "./component/PhoneInfo"

class App extends Component {
    state = {
        info: [],
    };
    key = 0;
    handlingRegister = (data)=>{
        this.setState({
            info:this.state.info.concat(
                {
                    ...data,
                    key:this.key++
                }
            )
        })
    };
    deleteInfoData = (id)=>{
        this.setState({
        info:this.state.info.filter(data=>{
            if(data.key === id){
                return data
                }
            })
        })
    };
    editInfoData = (externalData, id)=>{
        let {info} = this.state;
        this.setState({
            info:info.map(data=>{
                console.log('id 값'+id + ' dataKey: '+data.key);
                if(data.key === id){
                    console.log('들어왔다');
                    return {
                        ...externalData,
                        key:id
                    }
                }
            })
        })
    };
    render() {
        console.log(this.state.info);
        return (
            <div>
                <PhoneForm handlingRegister={this.handlingRegister}/>
                <PhoneInfo dataInformation={this.state.info} deleteInfoData={this.deleteInfoData} editInfoData = {this.editInfoData}/>
            </div>
        )
    }
}

export default App;
