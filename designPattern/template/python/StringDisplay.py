from AbstractPrint import AbstractPrint


class StringDisplay(AbstractPrint):

    def __init__(self, input_string):
        self.output_string = input_string
        self.width = len(input_string)
        self.result = ""

    def open(self):
        self.printLine()

    def print_input(self):
        print("|" + self.output_string + "|")

    def close(self):
        self.result = ""
        self.printLine()

    def printLine(self):
        self.result += "+"
        for i in range(0, self.width):
            self.result += "-"
        self.result += "+"
        print(self.result, end="\n")


if __name__ == "__main__":
    hi = StringDisplay("hi")
    hi.display()
