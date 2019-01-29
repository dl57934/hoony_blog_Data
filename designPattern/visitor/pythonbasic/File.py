from Entry import Entry
from Element import Element


class File(Entry, Element):
    def __init__(self, name, size):
        self.name = name
        self.size = size

    def getName(self):
        return self.name

    def getSize(self):
        return self.size

    def accept(self, visitor):
        visitor.visitFile(self)