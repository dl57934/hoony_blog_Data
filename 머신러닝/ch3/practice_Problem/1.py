from keras.datasets import mnist
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import classification_report
(trainData, trainLabel), (testData, testLabel) = mnist.load_data()

trainData = trainData.reshape(60000, 784)
testData = testData.reshape(10000, 784)


clf = KNeighborsClassifier()
clf.fit(trainData, trainLabel)
predictValue = clf.predict(testData)
print(classification_report(testData, predictValue))