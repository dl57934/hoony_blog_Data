class BigChar:

    def __init__(self, number):
        self.txt = ""
        with open("big" + number + ".txt", 'r') as fp:
            lines = fp.read()
            for line in lines:
                self.txt += line

    def getBigChar(self):
        return self.txt

