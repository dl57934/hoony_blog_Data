import React, { Component } from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfo from "./component/PhoneInfo"

class App extends Component {
    state={
      info:[
          {id:0,
          name:'홍길동',
          phone:'010-0000-0001'},
          {id:1,
              name:'김민준',
              phone:'010-0000-0002'},
          {id:2,
              name:'이상훈',
              phone:'010-0000-0003'}
      ]
    };
    id = 3;
    onCreate=(data)=>{
        const {info} = this.state;
        this.setState({
            info:info.concat({
            ...data,
            id:this.id++
        })})
    };
    handlingRemove = (id)=>{
        const {info} = this.state;
        this.setState({
            info: info.filter(info=>{
                return info.id !== id
            })
        })
    };
    handlingChange=(data, id)=>{
        const changedInfo = data;
        const {info}= this.state;
        this.setState({
            info:info.map(info=>{
                if(info.id === id){
                    return {
                        id,
                        ...changedInfo
                    }
                }else {
                    return info
                }
            })
        })
      /*  const {info} = this.state;
        this.setState({
            info:info.map(data=>{
                if(id === info.id){
                    data = data2;
                    return data;
                }
            })
        })*/
    };
    render(){
        return(
            <div>
            <PhoneForm onCreate={this.onCreate}/>
            <PhoneInfo data={this.state}
            handlingRemove={this.handlingRemove}
            handlingChange={this.handlingChange}
            />
            </div>
        )

    }
}

export default App;
