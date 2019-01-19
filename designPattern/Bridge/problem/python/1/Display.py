class Display:
    def __init__(self, impl_section):
        self.impl_section = impl_section

    def open(self):
        self.impl_section.raw_open()

    def print(self):
        self.impl_section.raw_print()

    def close(self):
        self.impl_section.raw_close()

    def display(self):
        self.open()
        self.print()
        self.close()
