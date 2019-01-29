from Directory import Directory
from File import File

if __name__ == '__main__':
    root = Directory("root")
    tmp = Directory("tmp")
    usr = Directory("usr")
    root.add(tmp)
    root.add(usr)
    root.add(File("1.html", 200))
    root.add(File("2.html", 100))
    root.add(File("3.html", 300))
    tmp.add(File("4.html",400))
    tmp.add(File("6.html", 600))
    tmp.add(File("5.html", 500))
    root.execute("")