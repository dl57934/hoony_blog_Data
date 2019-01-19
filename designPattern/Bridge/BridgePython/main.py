from StringDisplayimpl import StringDisplayimpl
from Display import Display
from CountDisplay import CountDisplay

if __name__ == "__main__":
    d1 = Display(StringDisplayimpl("hi hi Python Bridge"))
    d1.display()
    d2 = Display(StringDisplayimpl("end Game......"))
    d2.display()
    d3 = CountDisplay(StringDisplayimpl("it's End Game....."))
    d3.display()
    d3.countDisplay(5)
