import pandas as pd

from sklearn.preprocessing import OneHotEncoder
from sklearn.svm import SVC
from sklearn.model_selection import train_test_split, cross_val_score, GridSearchCV, RandomizedSearchCV
from sklearn import metrics
from sklearn.ensemble import RandomForestClassifier

mushroomCsvData = pd.read_csv('./dataFile/mushroom.csv')
mushroomData = []
eatingData, categories = mushroomCsvData['p'].factorize()
encoder = OneHotEncoder()
mushroomLabel = []

checkCol = [{'cnt': 0, 'data': {}} for a in range(22)]

for mushroomIndex, mushroomArray in mushroomCsvData.iterrows():
    temporaryData = []
    mushroomLabel.append(mushroomArray.ix[0])
    for col, data in enumerate(mushroomArray[1:]):
        d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        if (data not in checkCol[col]['data']):
            checkCol[col]['data'][data] = checkCol[col]['cnt']
            d[checkCol[col]['data'][data]] = 1
            checkCol[col]['cnt'] += 1
        else:
            d[checkCol[col]['data'][data]] = 1
        temporaryData += (d)
    mushroomData.append(temporaryData)

paramGrid = [
    {'c':[1, 10, 100, 1000], "kernel":["linear"]},
    {'c':[1,1], 'kernel':["rbf"], 'gamma':[0.001, 0.0001]}
]

clf = RandomForestClassifier()
trainData, testData, trainLabel, testLabel = train_test_split(mushroomData, mushroomLabel)
clf.fit(trainData, trainLabel)
predict = clf.predict(testData)

ac_score = metrics.accuracy_score(testLabel, predict)
cl_report = metrics.classification_report(testLabel, predict)
score = cross_val_score(clf, trainData, trainLabel, cv=30)
print(ac_score)
print(cl_report)
print(score)
