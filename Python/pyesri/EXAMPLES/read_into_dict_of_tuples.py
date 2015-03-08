#!/usr/bin/python

knight_info = {}

with open("../DATA/knights.txt") as kn:
    for line in kn:
        (name,title,color,quest,comment) = line[:-1].split(":")
        knight_info[name] = title,color,quest,comment

print knight_info
print
for name, info in knight_info.iteritems():
    print name, info
print

for name, info in knight_info.iteritems():
    print info[0], name
print
