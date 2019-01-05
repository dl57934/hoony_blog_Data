from Product import Product

class TvProduct(Product):

	def __init__(self, company, quality):
		self.company = company
		self.quality = quality
		print(company+"회사의 "+quality+"화질로 tv가 만들어졌습니다.")

	def getInfo(self):
		print(self.company + "회사의 "+ self.quality+"화질인 제품입니다.")