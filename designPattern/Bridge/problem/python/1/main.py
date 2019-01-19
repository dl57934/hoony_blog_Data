from BracketDisplay import BracketDisplay
from BracketImpl import BracketImpl
from RandomDisplay import RandomDisplay
from StringImpl import StringImpl
from CountDisplay import CountDisplay

if __name__ == "__main__":
    bracket_impl = BracketImpl("-", "##############", "|")
    bracket_display = BracketDisplay(bracket_impl)
    bracket_display.multiDisplay()
