from ImplSection import ImplSection


class StringImpl(ImplSection):
    def __init__(self, input_str):
        self.input_str = input_str
        self.limit = len(input_str)

    def raw_open(self):
        self.print_line()

    def raw_print(self):
        print("|"+self.input_str+"|", end="\n")

    def raw_close(self):
        self.print_line()

    def print_line(self):
        print("+",end="")
        for i in range(self.limit):
            print("-",end="")
        print("+")