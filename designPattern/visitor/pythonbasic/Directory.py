from Element import Element
from Entry import Entry


class Directory(Element, Entry):
    def __init__(self, name):
        self.name = name
        self.documents = []

    def getName(self):
        return self.name

    def getSize(self):
        size = 0
        for docs in self.documents:
            size += docs.getSize()
        return size

    def add(self, file_or_directory):
        self.documents.append(file_or_directory)

    def accept(self, visitor):
        visitor.visitDirectory(self)