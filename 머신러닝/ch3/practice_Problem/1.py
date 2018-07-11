from keras.datasets import mnist
from sklearn.model_selection import cross_val_score
from sklearn.ensemble import RandomForestClassifier
from sklearn import metrics
(trainData, trainLabel),(testData, testLabel) = mnist.load_data()

trainData = trainData.reshape(60000, 784)
testData = testData.reshape(10000, 784)


clf = RandomForestClassifier()
crossClf = cross_val_score(clf, trainData, trainLabel, cv=5)
print(crossClf)