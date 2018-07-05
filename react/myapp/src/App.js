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
    render() {
        return (
            <div>
                <PhoneForm handlingRegister={this.handlingRegister}/>
                <div>{JSON.stringify(this.state.info)}</div>
            </div>
        )
    }
}

export default App;
