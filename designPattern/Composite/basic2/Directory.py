from Entry import Entry


class Directory(Entry):

    def __init__(self, name):
        self.name = name
        self.array = []

    def print_path(self, prefix):
        print(prefix+"/"+super().__repr__())
        for fileDirec in self.array:
            fileDirec.print_path(prefix+"/"+self.name)

    def add(self, entry):
        self.array.append(entry)

    def get_name(self):
        return self.name

    def get_size(self):
        size = 0
        for fileDirec in self.array:
            size += fileDirec.get_size()

        return size
