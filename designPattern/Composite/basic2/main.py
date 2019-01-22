from Directory import Directory
from File import File

if __name__ == "__main__":
    root = Directory("root")
    bin = Directory("bin")
    tmp = Directory("tmp")
    usr = Directory("usr")

    root.add(bin)
    root.add(tmp)
    root.add(usr)

    bin.add(File("vi", 10000))
    bin.add(File("latex", 20000))
    root.print_line()