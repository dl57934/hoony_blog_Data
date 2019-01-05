import abc

class Factory:
	__metaclass__ = abc.ABCMeta

	def create(self, company, quality):
		p = self.createProduct(company, quality)
		self.registProduct(p)
		return p

	@abc.abstractmethod
	def createProduct(self, company, quality):
		pass

	@abc.abstractmethod
	def registProduct(self, product):	
		pass