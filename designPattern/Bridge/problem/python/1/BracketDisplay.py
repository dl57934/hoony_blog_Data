from CountDisplay import CountDisplay


class BracketDisplay(CountDisplay):
    def __init__(self, impl_section):
        super().__init__(impl_section)
        self.length = len(impl_section.body)

    def multiDisplay(self):
        for i in range(self.length):
            self.count_display(i)
