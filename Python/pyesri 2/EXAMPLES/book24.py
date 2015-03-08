#!/usr/bin/python

# properties in 2.4

class Book(object):
    def __init__(self,author=None,title=None):
        self._author = author
        self._title = title

    # author property
    def getauthor(self): return self._author
    def setauthor(self, value): self._author = value
    def delauthor(self): del self._author
    Author = property(getauthor, setauthor, delauthor, 'Author of the book')

    # title property
    def gettitle(self): return self._title
    def settitle(self, value): self._title = value
    def deltitle(self): del self._title
    Title = property(gettitle, settitle, deltitle, 'title of the book')

if __name__ == '__main__':
    b1 = Book('Moby Dick','Herman Melville')
    print "author is",b1.Author
    print "title is",b1.Title
    print

    b2 = Book
    b2.Author = 'Edgar Allan Poe'
    b2.Title = 'The Fall of the House of Usher'
    print "author is",b2.Author
    print "title is",b2.Title

