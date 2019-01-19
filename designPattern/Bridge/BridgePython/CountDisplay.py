from Display import Display


class CountDisplay(Display):

    def __init__(self, impl_display):
        super().__init__(impl_display)

    def countDisplay(self, count):
        self.basic_open()
        for i in range(0, count):
            self.basic_print()
        self.basic_close()
