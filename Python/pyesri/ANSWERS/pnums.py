#!/usr/bin/python

import sys
import re

num = re.compile(r"\b\d{3}-\d{4}\b")

for file in sys.argv[1:]:
    with open(file) as f:
        for line in f:
            if num.search(line):
                print line,

