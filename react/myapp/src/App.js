import React, { Component } from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfo from "./component/PhoneInfo"

class App extends Component {
    state = {
        info:[]
    };
    id = 0;
    onCreate = (data) => {
        const {info} = this.state;
        this.setState({
           info: info.concat({
               ...data,
               id:this.id++
           })
        });
    };
    handlingRemove = (id)=>{
        const {info} = this.state;
        this.setState({
         info:info.filter(info => info.id !== id)
        })
    };

    handleUpdate = (id, data)=>{
      const {info} = this.state;
      this.setState({
          info:info.map(info=>{
              if(info.id ===id){
                  return {
                      id,
                      ...data
                  }
              }else{
                  return info
              }
          })
      })
    };
    render(){
        return (
            <div>
                <PhoneForm onCreate={this.onCreate}/>
                <br/>
                <PhoneInfo data={this.state.info}
                onRemove={this.handlingRemove}
                onUpdate={this.handleUpdate}
                />
            </div>
        )
    }
}

export default App;
