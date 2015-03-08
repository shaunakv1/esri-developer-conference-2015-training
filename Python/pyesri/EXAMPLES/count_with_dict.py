#!/usr/bin/python

BR = open("../DATA/breakfast.txt") 
counts = {}

for line in BR:
    breakfast_item = line.rstrip()
    if breakfast_item in counts:
        counts[breakfast_item] = counts[breakfast_item] + 1
    else:
        counts[breakfast_item] = 1

# short version:
#    counts[breakfast_item] = counts.get(breakfast_item,0) + 1

BR.close()

for item, count in counts.iteritems():
    print item, count
