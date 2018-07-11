import pandas as pd
from sklearn.svm import SVC
from sklearn.metrics import classification_report
from sklearn.model_selection import GridSearchCV
trainData = pd.read_csv('../data/train.csv')
testData = pd.read_csv('../data/test.csv')
testLabel = pd.read_csv('../data/gender_submission.csv')
trainLabel = trainData['Survived']

trainData.pop('Survived')
trainData.pop('Cabin')
trainData.pop('Ticket')
trainData.pop('Name')
trainData.pop('PassengerId')
testData.pop('Cabin')
testData.pop('Ticket')
testData.pop('Name')
testData.pop('PassengerId')

trainData['Sex'] = trainData['Sex'].map(lambda a: 0 if a=='male' else 1)
testData['Sex'] = testData['Sex'].map(lambda a: 0 if a=='male' else 1)
trainData['Embarked'] = trainData['Embarked'].map(lambda a : 0 if a=='C' else 1 if a == 'S'  else 2)
testData['Embarked'] = testData['Embarked'].map(lambda a : 0 if a=='C' else 1 if a == 'S'  else 2)

median = trainData["Age"].median()
trainData['Age'].fillna(median, inplace=True)
median = testData["Age"].median()
testData['Age'].fillna(median, inplace=True)
median = testData["Fare"].median()
testData['Fare'].fillna(median, inplace=True)
print(trainData.info())
print(testData.info())

clf = SVC()
clf.fit(trainData, trainLabel)
predictData = clf.predict(testData)

report = classification_report(predictData, testLabel['Survived'])


print(report)