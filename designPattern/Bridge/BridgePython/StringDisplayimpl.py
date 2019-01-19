from Displayimpl import Displayimpl


class StringDisplayimpl(Displayimpl):

    def __init__(self, str):
        self.str = str
        self.limit = len(str)

    def rawOpen(self):
        self.printLine()

    def rawPrint(self):
        print("|"+self.str+"|")

    def rawClose(self):
        self.printLine()

    def printLine(self):
        print("+", end="")
        for i in range(self.limit):
            print("-", end="")
        print("+")
