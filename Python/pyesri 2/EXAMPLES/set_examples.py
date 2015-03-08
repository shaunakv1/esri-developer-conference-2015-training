#!/usr/bin/python

pythons = set(['Idle','Chapman','Cleese','Jones','Gilliam','Palin'])
fawlty = set(['Cleese','Booth'])

pythons.add('Innes')

print "pythons", pythons
print "fawlty", fawlty
print
print "pythons & fawlty", pythons & fawlty
print "pythons | fawlty", pythons | fawlty
print "pythons ^ fawlty", pythons ^ fawlty
print "pythons - fawlty", pythons - fawlty
