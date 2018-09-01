import tensorflow as tf

a = tf.Variable(initial_value=3, name='a')
b = tf.Variable(initial_value=4, name='b')

c = a+b

init = tf.global_variables_initializer()

sess = tf.InteractiveSession()
init.run()
result = c.eval()
sess.close()