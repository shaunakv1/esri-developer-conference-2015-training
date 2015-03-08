#!/usr/bin/env python 

class UnknownKnightError(Exception):
    pass

class Knight(object):

    def __init__(self,name):
        self._name = name
        try:
            with open('../DATA/knights.txt') as K:
                found = False
                for line in K:
                    (name,title,color,quest,cmt) = line[:-1].split(":")
                    if name == self._name:
                        self._title = title
                        self._color = color
                        self._quest = quest
                        self._comment = cmt
                        found = True
                        break
                if not found:
                    raise UnknownKnightError("No such knight as '" + self._name + "'")   

    @property
    def Name(self):
        return self._name
            
    @property
    def Title(self):
        return self._title
            
    @property
    def FavoriteColor(self):
        return self._color
            
    @property
    def Quest(self):
        return self._quest
            
    @property
    def Comment(self):
        return self._comment
            

if __name__== "__main__":
    k = Knight("Arthur")
    print k.Name,k.FavoriteColor,k.Comment,k.Title
    try:
        k2 = Knight("Hillary")
    except UnknownKnightError,e:
        print e
