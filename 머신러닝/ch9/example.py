import numpy as np
import tensorflow as tf
from sklearn.datasets import fetch_california_housing
from sklearn.preprocessing import StandardScaler

n_epochs = 1000
learning_rate = 0.01

scaler = StandardScaler()
housing = fetch_california_housing()

m, n = housing.data.shape  # 데이터 개수, 특성 수
scaled_housing_data = scaler.fit_transform(housing.data)
scaled_housing_data_plus_bias = np.c_[np.ones((m, 1)), scaled_housing_data]

batch_size = 100
n_batches = int(np.ceil(m / batch_size))

X = tf.placeholder(dtype=tf.float32, shape=(None, n+1), name="X")
y = tf.placeholder(dtype=tf.float32, shape=(None, 1), name="y")
theta = tf.Variable(tf.random_uniform([n + 1, 1], -1.0, 1.0), name="theta")
y_pred = tf.matmul(X, theta, name="predictions")

with tf.name_scope("loss") as scope:
    error = y_pred - y
    mse = tf.reduce_mean(tf.square(error), name="mse")
# gradients = 2 / m * tf.matmul(tf.transpose(X), error) 손수 경사하강법 계산
# gradients = tf.gradients(mse, [theta])[0] 자동 미분
# training_op = tf.assign(theta, theta - learning_rate * gradients) 자동 미분
optimizer = tf.train.GradientDescentOptimizer(learning_rate=learning_rate)
training_op = optimizer.minimize(mse)
init = tf.global_variables_initializer()
saver = tf.train.import_meta_graph("./final.ckpt.meta")

graph = tf.get_default_graph()
theta = graph.get_tensor_by_name()

def fetch_batch(batch_size):
    np.random.seed(42)
    indices = np.random.randint(m, size=batch_size)
    print(m)
    X_batch = scaled_housing_data_plus_bias[indices]
    y_batch = housing.target.reshape(-1, 1)[indices]
    return X_batch, y_batch

with tf.Session() as sess:
    init.run()
    for epoch in range(n_epochs):
        for batch in range(n_batches):
            X_batch, y_batch = fetch_batch(batch_size)
            sess.run(training_op, feed_dict={X:X_batch, y:y_batch})


for op in tf.get_default_graph().get_operations():
    print(op.name)