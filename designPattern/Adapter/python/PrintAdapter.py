from Printer import Printer


class PrintAdapter(Printer):

    def __init__(self, banner):
        self.banner = banner

    def print_strong(self):
        self.banner.printAster()

    def print_week(self):
        self.banner.printParen()
