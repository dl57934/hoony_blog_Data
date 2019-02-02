from BigFactory import BigFactory

class BigString:
    def __init__(self, orders):
        self.orders = orders

    def getText(self):
        for order in self.orders:
            factory = BigFactory()
            big_char = factory.making(order)
            self.result_print(big_char)

    def result_print(self, big_char):
        print(big_char)

