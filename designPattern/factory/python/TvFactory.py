from Factory import Factory
from TvProduct import TvProduct

class TvFactory(Factory):
	def __init__(self):
		self.tvs = []

	def createProduct(self, company, quality):
		return TvProduct(company, quality)

	def registProduct(self, product):
		self.tvs.append(product)