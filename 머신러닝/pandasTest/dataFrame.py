import pandas as pd
import numpy as np

#list

data = [{'a':1, 'b':2}, {'a':1, 'b':2, 'c':3}]
# print(pd.DataFrame(data))




#array

data = np.zeros((2,), dtype=[('D','i4'), ('E','f4'), ('F','a10'), ('flag', 'b')])
data[:] = [(1,2.,'Hello', False), (2,3.,"World", False)]
#select
data['E'] = data['D'] * data['E']
data['flag'] = data['D'] > 0

# print(pd.DataFrame(data))
#
# print(pd.DataFrame(data, columns=['F', 'D', 'E']))




#dict
# data = {
#     'one':pd.Series([0, 1, 2, 3], index=['a', 'b', 'c', 'd']),
#     'two':pd.Series([4, 5, 6, 7], index=['a', 'b', 'c', 'd'])
# }
#
# df = pd.DataFrame(data)
# print(df.index)
# print(df.columns)
v = pd.DataFrame(data)
del v['D']
v.pop('F')
v['poo'] = 'bar'
v.insert(1, 'E2', v['E'])
print(v)
# print(pd.DataFrame.from_records(data, index='F'))