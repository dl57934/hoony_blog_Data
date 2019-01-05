import Product from "./Product";

export default class TvProduct extends Product{

	constructor(compnay, resoluation){
		super();
		this.compnay = compnay;
		this.resoluation = resoluation;
		console.log(`${this.compnay}에서 ${this.resoluation}화질의 제품이 제작되었습니다.`);
	}

	getInfo(){
		console.log(`${this.compnay}에서 만든 ${this.resoluation}화질의 제품입니다.`);
	}

}