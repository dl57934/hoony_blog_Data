from Generator import Generator
import numpy as np


class MakingChild(Generator):

    def __init__(self):
        super().__init__()
        self.son = 0
        self.daughter = 0

    def getSon(self):
        return str(self.son)

    def getDaughter(self):
        return str(self.daughter)

    def execute(self):
        standard = np.random.randint(2)
        if standard == 0:
            self.son += 1
        else:
            self.daughter += 1
        self.allNotify()
