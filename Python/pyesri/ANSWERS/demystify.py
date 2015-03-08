#!/usr/bin/python

with open("../DATA/mystery","rb") as m:
    bytes = m.read()

print bytes[::2]
