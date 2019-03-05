import abc


class Printer:
    __metaclass__ = abc.ABCMeta

    @abc.abstractmethod
    def print_strong(self):
        pass

    @abc.abstractmethod
    def print_week(self):
        pass
