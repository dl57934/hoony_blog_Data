from Visitor import Visitor

class StringVisitor(Visitor):

    def __init__(self):
        self.prefix = ""
        self.save = ""

    def visitFile(self, file):
        print(self.prefix+"/"+file.getName())

    def visitDirectory(self, directory):
        print(self.prefix+"/"+directory.getName())
        self.save = self.prefix
        self.prefix = self.prefix+"/"+directory.getName()
        for file_or_dir in directory.documents:
            file_or_dir.accept(self)
        self.prefix = self.save

