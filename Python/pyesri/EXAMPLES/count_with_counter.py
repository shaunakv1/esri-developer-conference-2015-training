#!/usr/local/bin/python

from collections import Counter

BR = open("../DATA/breakfast.txt") 
counts = Counter()

for line in BR:
    counts[line[:-1]] += 1

BR.close()

for item,count in counts.iteritems():
    print item,count

