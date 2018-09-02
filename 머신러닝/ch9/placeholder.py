import tensorflow as tf

A = tf.placeholder(dtype=tf.float32, shape=(None, 3), name="A")
B = A + 5

with tf.Session() as sess:
    B_result = B.eval(feed_dict={A: [[1, 2, 3]]})
    B_result2 = B.eval(feed_dict={A: [[4, 5, 6], [7, 8, 9]]})
    print(B_result)
    print(B_result2)
