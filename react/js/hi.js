/*import React, {Component, Fragment} from 'react'

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
}*/

let fibo = {
    [Symbol.iterator]: function* () {
        let pre = 0, fut = 1;
        while (true){
            [pre, fut] = [fut, pre+fut];
            yield [fut,pre];
        }
    }
}


for( i of fibo){
    if(i[0] >2000) break;
    console.log(i)
}
