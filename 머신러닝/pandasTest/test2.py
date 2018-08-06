import numpy as np
import pandas as pd
np.random.seed(0)
df2 = pd.DataFrame({
    'key1': ['A', 'A', 'B', 'B', 'A'],
    'key2': ['one', 'two', 'one', 'two', 'one'],
    'data1': [1, 2, 3, 4, 5],
    'data2': [10, 20, 30, 40, 50]
})

print(df2.groupby(df2["key1"]).sum())
print(df2.data1.groupby(df2["key1"]).sum())

