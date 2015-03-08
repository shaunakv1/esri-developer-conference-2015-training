#!/usr/bin/python

count = 0
with open("../DATA/alice.txt") as ALICE:
    for line in ALICE:
        if "Alice" in line:
            count += 1

print "Alice occurred on {0} lines in alice.txt".format(count)
