import abc


class Observer:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def update(self, generator):
        pass
