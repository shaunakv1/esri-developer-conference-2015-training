#!/usr/bin/python

# properties in 2.6

class Book(object):
    def __init__(self,author=None,title=None):
        self._author = author
        self._title = title

    # author property
    @property
    def Author(self):
        '''Author of the book'''
        return self._author

    @Author.setter
    def Author(self,author):
        self._author = author.strip()

    # title property
    @property
    def Title(self):
        '''Title of the book'''
        return self._title

    @Title.setter
    def Title(self,title):
        self._title = title

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
