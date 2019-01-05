export default class Singleton{
	static instance;

	constructor(){
		if(instance)
			return instance;
		instance = this;
	}
}