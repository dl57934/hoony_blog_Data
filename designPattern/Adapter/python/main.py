from PrintAdapter import PrintAdapter
from Banner import Banner

if __name__ == '__main__':
    printer = PrintAdapter(Banner("Hi Hoony's Blog"))
    printer.print_strong()
    printer.print_week()
