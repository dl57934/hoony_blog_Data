my_iter_tuple = iter(("cleanCode", "JavaScript", "node.js"))
my_iter_array = iter(["cleanCode", "JavaScript", "node.js"])

for i in range(3):
	print(next(my_iter_tuple))
	print(next(my_iter_array))

