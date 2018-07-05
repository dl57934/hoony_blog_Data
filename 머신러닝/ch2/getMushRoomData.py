from urllib import request

localFile = 'mushroom.csv'
url = "https://archive.ics.uci.edu/ml/machine-learning-databases/mushroom/agaricus-lepiota.data"

request.urlretrieve(url, './dataFile/'+localFile)
print("ok")