#!/usr/bin/python

foo = dict(red=5,green=18,blue=1,pink=0,grey=27,yellow=5)

for color,num in sorted(foo.iteritems()):
    print color,num

print

for color,num in sorted(foo.iteritems(),key=lambda e: e[1]):
    print color,num


