#!/usr/bin/env python
# (c)2015 John Strickler

letters = ['a', 'b','m','z', 'x', 'c']
s1 = set(letters)

s2 = { 'm', 'c', 'a', 'd', 'f', 'r' }
s2.add('p')
s2.add('p')
s2.add('p')

print "intersection:", s1 & s2
print "union:", s1 | s2
print "xor:", s1 ^ s2
print 's1 - s2:', s1 - s2
print 's2 - s1:', s2 - s1

print len(s1), len(s2)
