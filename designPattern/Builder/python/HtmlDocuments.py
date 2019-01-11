from Builder import Builder


class HtmlDocuments(Builder):

    def __init__(self):
        self.str = ""

    def setTitle(self, title):
        self.str += "<h1>"+title+"</h1>\n"

    def setText(self, text):
        self.str += "<p>" + text + "</p>\n"

    def setItems(self, items):
        self.str+="<ul>"
        for i, item in enumerate(items):
            self.str += "<li>"+str(i)+". "+item+"</li>\n"
        self.str += "</ul>\n"

    def close(self):
        super().close()

    def getResult(self):
        return self.str