import abc


class Generator:
    __metaclass__ = abc.ABCMeta

    def __init__(self):
        self.observers = []

    def add_observer(self, observer):
        self.observers.append(observer)

    def allNotify(self):
        it = iter(self.observers)
        for i in range(len(self.observers)):
            observer = next(it)
            observer.update(self)

    @abc.abstractmethod
    def execute(self):
        pass

    @abc.abstractmethod
    def getSon(self):
        pass

    @abc.abstractmethod
    def getDaughter(self):
        pass
