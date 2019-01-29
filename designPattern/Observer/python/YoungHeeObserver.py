from Observer import Observer


class YoungHeeObserver(Observer):

    def update(self, generator):
        son = generator.getSon()
        daughter = generator.getDaughter()
        print("YoungHee have son: " + son + " daughter: " + daughter)