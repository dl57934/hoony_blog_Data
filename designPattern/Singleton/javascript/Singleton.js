let instance;
class Singleton{

	constructor(){

		if(instance) 

			return instance;

		instance = this;

//이 클래스의 객체를 만들어서 넣어준다.

	}

}



let A = new Singleton();

let B = new Singleton();



if(A === B)

console.log("같다");

else 

console.log("다르다");

