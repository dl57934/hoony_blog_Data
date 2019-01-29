import abc


class Visitor:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def visitFile(self, file):
        pass

    @abc.abstractmethod
    def visitDirectory(self, directory):
        pass
