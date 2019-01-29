import abc


class Entry:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def getName(self):
        pass

    @abc.abstractmethod
    def getSize(self):
        pass

    def execute(self, prefix):
        self.print_line(prefix)

    @abc.abstractmethod
    def print_line(self, prefix):
        pass

    def getInformation(self):
        return str(self.getName()) + " ("+str(self.getSize())+")"
