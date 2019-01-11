from Builder import Builder


class TextDocuments(Builder):

    def __init(self):
        self.str = ""

    def setTitle(self, title):
        self.str+="----------------------------"
        self.str += title+"\n"

    def setText(self, text):
        self.str += text + "\n"

    def setItems(self, items):
        for i, item in enumerate(items):
            self.str += "<li>"+i+". "+item+"</li>\n"

    def close(self):
        super().close()

    def getResult(self):
        return self.str