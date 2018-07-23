import pandas as pd

from matplotlib import pyplot as plt
from sklearn.model_selection import StratifiedShuffleSplit
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import Imputer, StandardScaler
from sklearn.pipeline import Pipeline
import numpy as np

housing = pd.read_csv('./dataFile/housing.csv')
print(housing)
print(housing["total_rooms"])
#
# housing["income_cat"] = np.ceil(housing["median_income"]/1.5)
# housing["income_cat"].where(housing["income_cat"] < 5, 5.0, inplace=True)
#
# split = StratifiedShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
# for train_index, test_index in split.split(housing, housing["income_cat"]):
#     strat_train_set = housing.loc[train_index]
#     strat_test_set = housing.loc[test_index]
#
# encoder = OneHotEncoder()
#
# housing_cat = housing["ocean_proximity"]
# housing_cat_encoded, housing_categories = housing_cat.factorize()
# housing_cat_1hot = encoder.fit_transform(housing_cat_encoded.reshape(-1, 1))
# onHot = housing_cat_1hot.toarray()
# for i in onHot:
#     print(i)
# #계층적 샘플링 + 랜덤 샘플링
#
#
#
#
