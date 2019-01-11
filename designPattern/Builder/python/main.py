from Director import Director
from HtmlDocuments import HtmlDocuments
from TextDocuments import TextDocuments


def isHtml(order):
    return order == "html"

def makeDocumeents(documents):
    director = Director(documents)
    director.constructor()
    print(documents.getResult())

if __name__ == "__main__":
    order = input()
    if isHtml(order):
        htmlDocuments = HtmlDocuments()
        makeDocumeents(htmlDocuments)
    else:
        TextDocuments = TextDocuments()
        makeDocumeents(TextDocuments)