from Entry import Entry


class Directory(Entry):

    def __init__(self, name):
        self.name = name
        self.dirs = []

    def getName(self):
        return self.name

    def getSize(self):
        size = 0
        for dir_or_file in self.dirs:
            size += dir_or_file.getSize()
        return size

    def add(self, dir_or_file):
        self.dirs.append(dir_or_file)

    def print_line(self, prefix):
        print(prefix+"/"+self.getInformation())
        for dir_or_file in self.dirs:
            dir_or_file.print_line(prefix+"/"+self.name)
