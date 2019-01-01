class Iterator{
	constructor(){
		this.index = 0;
		this.arr = new Array();
	}

	append(name){
		this.arr.push(name);
	}

	next(){
		const bookName = this.arr[this.index];
		this.index++;
		return bookName;
	}

	done(){
		if(this.arr.length > this.index)
			return true;
		else 
			return false;
	}
}

it = new Iterator();

it.append("Node.js");
it.append("Python");
it.append("C");
it.append("C++");

while(it.done()){
	console.log(it.next());
}