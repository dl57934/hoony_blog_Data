from Entry import Entry


class File(Entry):
    def __init__(self, name, size):
        self.size = size
        self.name = name

    def print_path(self, prefix):
        print(prefix+"/"+super().__repr__())

    def get_name(self):
        return self.name

    def get_size(self):
        return self.size

