import abc


class ImplSection:
    __metaclass__ = abc.ABCMeta

    def raw_open(self):
        pass

    def raw_print(self):
        pass

    def raw_close(self):
        pass
