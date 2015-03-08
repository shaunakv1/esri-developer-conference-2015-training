#!/usr/bin/python

class Animal(object):
    count = 0

    def __init__(self,species,name,sound):
        self._species = species
        self._name = name
        self._sound = sound
        Animal.count += 1
    
    def kill(self):
        Animal.count -= 1

    @property
    def Species(self):
        return self._species
    
    @property
    def Name(self):
        return self._name
    
    def MakeSound(self):
        print self._sound
    
    @classmethod
    def ZooSize(cls):
        return cls.count

if __name__ == "__main__":
    leo = Animal("African lion","Leo","Roarrrrrrr")
    garfield = Animal("cat","Garfield","Meowwwww")
    felix = Animal("cat","Felix","Meowwwww")

    print leo.Name,"is a",leo.Species,"--",
    leo.MakeSound()
    
    print garfield.Name,"is a",garfield.Species,"--",
    garfield.MakeSound()
    
    print felix.Name,"is a",felix.Species,"--",
    felix.MakeSound()
