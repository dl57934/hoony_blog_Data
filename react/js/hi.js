import React, {Component, Fragment} from 'react'

class App extends Component
{

    render(){
        const a = 1;
        const b= 2;
        const c= 3;
        return (
            (()=> {
                if (a === 1)
                    return <div>a가 {a}야!!!</div>
                else
                    return <div>뭐 다틀리노 !!</div>

            })()
        );
    }
}

export default App