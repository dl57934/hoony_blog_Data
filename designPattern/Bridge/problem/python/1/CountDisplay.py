from Display import Display


class CountDisplay(Display):

    def __init__(self, implSection):
        super().__init__(implSection)

    def count_display(self, count):
        self.open()
        for i in range(0, count):
            self.print()
        self.close()
