import tensorflow as tf

a = tf.Variable(initial_value=3, name='a')
b = tf.Variable(initial_value=4, name='b')

c = a+b

graph = tf.Graph()
with graph.as_default():
    x2 = tf.Variable(2)

print(x2.graph is graph)
print(x2.graph is tf.get_default_graph())