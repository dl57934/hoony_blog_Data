import abc

class Product:
	__metaclass__ = abc.ABCMeta

	@abc.abstractmethod
	def getInfo(self):
		pass