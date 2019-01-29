from MakingChild import MakingChild
from YoungHeeObserver import YoungHeeObserver
from ChulsuObserver import ChulsuObserver

if __name__ == "__main__":
    generator = MakingChild()
    youngHee = YoungHeeObserver()
    chulsu = ChulsuObserver()
    generator.add_observer(youngHee)
    generator.add_observer(chulsu)
    for i in range(5):
        generator.execute()