#!/usr/bin/python

# sort by frequency

import sys
import re

wordsep = re.compile(r"[^\w']+")

for fname in sys.argv[1:]:
    with open(fname) as f:
        found = {}
        for line in f:
            words = wordsep.split(line)
            for x in words:
                if x == "": continue
                if x == "'": continue
                x = x.lower()
                if x in found:
                    found[x] += 1
                else:
                    found[x] = 1    

    words = found.keys()
    words.sort(lambda x,y: cmp(found[y],found[x]) or cmp(x,y))
    
    for w in words:
        print "{0:<16s} {1:4d}".format(w,found[w])

        
