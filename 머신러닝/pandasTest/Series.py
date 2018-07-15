import pandas as pd
import numpy as np
data = [0, 1, 2, 3, 4]
s = pd.Series(data, index=['a', 'b', 'c', 'd', 'e'], name="alphabet")
# print(s[0:5])
# print(s*2)
print(s)
# print(np.exp(s))
# print(pd.Series(5., index=['a', 'b', 'c', 'd', 'e']))
