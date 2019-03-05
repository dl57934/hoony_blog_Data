
class Banner:
    def __init__(self, name):
        self.name = name

    def printAster(self):
        print("*"+self.name+"*", end="\n")

    def printParen(self):
        print("(" + self.name + ")", end="\n")