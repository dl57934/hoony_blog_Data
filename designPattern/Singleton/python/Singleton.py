class Singleton:
	__singleton = None

	def __new__(cls, *args, **kwargs):
		if not cls.__singleton:
			cls.__singleton = super(Singleton, cls).__new__(cls, *args, **kwargs)

		return cls.__singleton	

