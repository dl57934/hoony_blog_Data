export default class Factory{
	constructor(){}

	createProduct(compnay, resoluation){}

	registerProduct(product){}

	create(compnay, resoluation){
		const p = this.createProduct(compnay, resoluation);
		this.registerProduct(p);
		return p;
	}
}