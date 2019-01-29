from Entry import Entry


class File(Entry):
    def __init__(self, name, size):
        self.name = name
        self.size = size

    def getName(self):
        return self.name

    def getSize(self):
        return self.size

    def print_line(self, prefix):
        print(prefix+"/"+self.getInformation())