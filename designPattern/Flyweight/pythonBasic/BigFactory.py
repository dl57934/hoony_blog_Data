from BigChar import BigChar


class BigFactory:
    __singleton = None

    def __init__(self):
        self.array = {}

    def __new__(cls, *args, **kwargs):
        if not cls.__singleton:
            cls.__singleton = super(BigFactory, cls).__new__(cls, *args, **kwargs)

        return cls.__singleton

    def making(self, number):
        if number not in self.array.keys():
            self.array[number] = BigChar(number)

        return self.array[number].getBigChar()
