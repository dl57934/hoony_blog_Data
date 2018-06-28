import React, { Component } from 'react';
import './App.css';
import PhoneForm from "./component/PhoneForm";
import PhoneInfo from "./component/PhoneInfo"

class App extends Component {
    state = {
        info:[]
    };
    id = 0
    onCreate = (data) => {
        const {info} = this.state;
        this.setState({
           info: info.concat({
               ...data,
               id:this.id++
           })
        });
    };

    render(){
        return (
            <div>
                <PhoneForm onCreate={this.onCreate}/>
                <br/>
                <PhoneInfo data={this.state.info}/>
            </div>
        )
    }
}

export default App;
