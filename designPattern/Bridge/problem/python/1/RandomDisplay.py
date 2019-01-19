from Display import Display
import numpy as np


class RandomDisplay(Display):

    def __init__(self, impl_section):
        super().__init__(impl_section)

    def random_display(self, count):

        if count == 0:
            count = np.random.randint(0, 10)

        self.open()
        for i in range(count):
            self.print()
        self.close()
