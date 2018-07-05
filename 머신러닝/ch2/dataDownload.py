from urllib import request
import os
import tarfile

url = "https://raw.githubusercontent.com/ageron/handson-ml/master/datasets/housing/housing.tgz"
fileLocation = './dataFile'

if not os.path.isdir(fileLocation):
    os.mkdir(fileLocation)
request.urlretrieve(url, fileLocation+'/housing.tgz')
housing_tgz = tarfile.open(fileLocation+'/housing.tgz')
housing_tgz.extractall(path=fileLocation)
housing_tgz.close()


