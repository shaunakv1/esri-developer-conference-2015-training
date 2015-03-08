#!/usr/bin/python

import sys
from knight import Knight

for name in sys.argv[1:]:
    k = Knight(name)
    print "Name: {0} {1}".format(k.Title,name)
    print "Favorite Color:",k.FavoriteColor
    print "Quest:",k.Quest
    print "Comment:",k.Comment
    print
