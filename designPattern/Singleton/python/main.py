from Singleton import Singleton

def main():
	a = Singleton()
	b = Singleton()
	
	if(a == b):
		print("같다")



if __name__ == "__main__":
	main()