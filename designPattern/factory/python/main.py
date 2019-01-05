from TvFactory import TvFactory

if __name__ == "__main__":
	tvFactory = TvFactory()
	tv1 = tvFactory.create("SamSung", "FullHD")
	tv2 = tvFactory.create("LG", "8k")
	tv3 = tvFactory.create("Sony", "4k")
	tv1.getInfo()
	tv2.getInfo()
	tv3.getInfo()
