import abc


class Entry:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def getName(self):
        pass

    @abc.abstractmethod
    def getSize(self):
        pass

