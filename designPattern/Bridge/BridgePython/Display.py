
class Display:

    def __init__(self, impl_display):
        self.impl_display = impl_display

    def basic_open(self):
        self.impl_display.rawOpen()

    def basic_print(self):
        self.impl_display.rawPrint()

    def basic_close(self):
        self.impl_display.rawClose()

    def display(self):
        self.basic_open()
        self.basic_print()
        self.basic_close()
