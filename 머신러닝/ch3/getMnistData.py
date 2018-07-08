from keras.datasets import mnist
from sklearn.linear_model import SGDClassifier
import numpy as np
(X_train, Y_train), (X_test, Y_test) = mnist.load_data()

X_train = X_train.reshape(60000, 784)
X_test = X_test.reshape(10000, 784)
shuffle_index = np.random.permutation(60000)
X_train, Y_train = X_train[shuffle_index], Y_train[shuffle_index]

Y_train5 = (Y_train == 5)
Y_test5 = (Y_test == 5)
sgd_clf = SGDClassifier(max_iter=5, random_state=42)
sgd_clf.fit(X_train, Y_train5)
print(sgd_clf.predict(X_test))
