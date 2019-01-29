from StringVisitor import StringVisitor
from Directory import Directory
from File import File

if __name__ == "__main__":
    root = Directory("root")
    tmp = Directory("tmp")
    usr = Directory("usr")
    html1 = File("1.html", 100)
    html2 = File("2.html", 200)
    html3 = File("3.html", 100)
    html4 = File("4.html", 100)

    root.add(tmp)
    root.add(usr)
    root.add(html1)
    root.add(html2)
    tmp.add(html3)
    tmp.add(html4)

    root.accept(StringVisitor())

