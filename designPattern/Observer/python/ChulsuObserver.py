from Observer import Observer


class ChulsuObserver(Observer):

    def update(self, generator):
        son = generator.getSon()
        daughter = generator.getDaughter()
        print("chulsu have son: "+ son + " daughter: "+daughter)
