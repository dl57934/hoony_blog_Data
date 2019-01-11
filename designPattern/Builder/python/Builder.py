import abc


class Builder:
    __metaclass__ = abc.ABCMeta

    def setTitle(self, title):
        pass

    def setText(self, text):
        pass

    def setItems(self, items):
        pass

    def close(self):
        pass

    def getResult(self):
        pass
