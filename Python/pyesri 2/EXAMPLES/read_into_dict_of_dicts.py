#!/usr/bin/python

knight_info = {}

with open("../DATA/knights.txt") as kn:
    for line in kn:
        (name,title,color,quest,comment) = line[:-1].split(":")
        knight_info[name] = {
            'title': title, 'color': color,
            'quest': quest, 'comment': comment
        }

print knight_info
print
for name, info in knight_info.iteritems():
    print name, info
print

for name, info in knight_info.iteritems():
    print info['title'], name
print

print knight_info['Arthur']['title']

print knight_info.keys(), '\n'
# print knight_info.values()

for knight in 'Arthur', 'Bob', 'Robin':
    if knight in knight_info:
        print knight_info[knight]['title'], knight
