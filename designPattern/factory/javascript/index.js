import TvFactory from "./TvFactory";

const factory = new TvFactory();
const tv1 = factory.create("LG", "4k");
const tv2 = factory.create("Samsung", "8k");
const tv3 = factory.create("LG", "FullHd");
tv1.getInfo();
tv2.getInfo();
tv3.getInfo();