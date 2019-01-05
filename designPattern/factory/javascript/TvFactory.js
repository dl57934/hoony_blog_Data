import Factory from "./Factory";
import TvProduct from "./TvProduct";

export default class TvFactory extends Factory{

	constructor(){
		super();
		this.tvs = new Array();
	}

	createProduct(compnay, resoluation){
		return new TvProduct(compnay, resoluation);
	}

	registerProduct(product){
		this.tvs.push(product);
	}
}

