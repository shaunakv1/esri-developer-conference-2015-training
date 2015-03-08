#!/usr/bin/python
import re
r = re.compile(r"\d{2,}")
with open("../DATA/spam.txt","r") as sp:
    for line in sp:
        if r.search(line):
            print line,
