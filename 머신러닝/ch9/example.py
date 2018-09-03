import numpy as np
import tensorflow as tf


def relu(X):
    threshold = tf.get_variable("threshold", shape=(),
                                initializer=tf.constant_initializer(0.0))
    w_shape = (int(X.get_shape()[1]), 1)
    w = tf.Variable(tf.random_normal(w_shape), name="weights")
    b = tf.Variable(0.0, name="bias")
    z = tf.add(tf.matmul(X, w), b, name="z")
    return tf.maximum(z, threshold, name='relu')
X = tf.placeholder(dtype=tf.float32, shape=(None, 3), name="X")
relus = []
for i in range(5):
    with tf.variable_scope("relu", reuse= (i >= 1)) as scope:
        relus.append(relu(X))
result = tf.add_n(relus, name="output")
print(result)