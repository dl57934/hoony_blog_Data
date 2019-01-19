from ImplSection import ImplSection


class BracketImpl(ImplSection):
    def __init__(self, head, body, end):
        self.head = head
        self.body = body
        self.end = end

    def raw_open(self):
        print(self.head, end="")

    def raw_print(self):
        print(self.body[0], end="")

    def raw_close(self):
        print(self.end, end="\n")