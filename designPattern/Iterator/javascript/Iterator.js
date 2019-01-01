class Iterator{

	constructor(){
		this.array = new Array();
		this.index = 0;
	}

	append(bookName){
		this.array.push(bookName);
	}

	next(){
		const data = this.array[this.index];
		this.index+=1;
		return data;
	}

	done(){
		if(this.array.length > this.index)
			return true;
		return false;
	}
}

const it = new Iterator();

it.append("clean Code");
it.append("node.js");
it.append("Design Pattern");
it.append("Jump to Python");

while(it.done()){
	console.log(it.next());
}