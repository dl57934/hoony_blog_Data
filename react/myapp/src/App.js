import React, { Component } from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfoList from "./component/PhoneInfoList";

class App extends Component {
    state = {
        info:[]
    };
    id = 0;
    handlingCreate = (data)=>{
        const {info} = this.state;
        this.setState({
            info:info.concat(
                Object.assign({}, data, {id:this.id++})
            )
        });
    };
    render() {
    return (
      <div>
          <PhoneForm onCreate={this.handlingCreate}/>
          <PhoneInfoList data={this.state.info}/>
      </div>
    );
  }
}

export default App;
