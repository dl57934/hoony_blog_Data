import abc


class Entry:
    __metaclass__ = abc.ABCMeta

    def get_name(self):
        pass

    def get_size(self):
        pass

    def print_line(self):
        self.print_path("")

    def print_path(self, prefix):
        pass

    def __repr__(self):
        return self.get_name() + " (" + str(self.get_size()) + ")\n"
