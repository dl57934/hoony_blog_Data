import abc


class Element:
    __metaclass__ = abc.abstractclassmethod

    def accept(self, visitor):
        pass
