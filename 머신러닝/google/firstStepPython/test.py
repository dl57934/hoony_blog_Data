from __future__ import print_function

import math

from IPython import display
from matplotlib import cm
from matplotlib import gridspec
from matplotlib import pyplot as plt
import numpy as np
import pandas as pd
from sklearn import metrics
import tensorflow as tf
from tensorflow.python.data import Dataset

california_housing_dataframe = pd.read_csv("https://dl.google.com/mlcc/mledu-datasets/california_housing_train.csv", sep=",")
total_rooms = california_housing_dataframe[["total_rooms"]]

features = {key: np.array(value) for key, value in dict(total_rooms).items()}
targets = california_housing_dataframe[["median_house_value"]]
ds = Dataset.from_tensor_slices((features, targets))  # warning: 2GB limit
ds = ds.batch(1000).repeat(True)  # num_epochs가 false면 계속 반복

print(ds.make_one_shot_iterator().get_next())


# <TensorSliceDataset shapes: {total_rooms: ()}, types: {total_rooms: tf.float64}> don't use targets
# <TensorSliceDataset shapes: ({total_rooms: ()}, ()), types: ({total_rooms: tf.float64}, tf.float64)> ["targets"]
# <TensorSliceDataset shapes: ({total_rooms: ()}, (1,)), types: ({total_rooms: tf.float64}, tf.float64)> [["targets"]]