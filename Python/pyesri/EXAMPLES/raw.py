#!/usr/bin/python

# print out a file 10 bytes at a time

with open("../DATA/parrot.txt","rb") as f:
    while (True):
        chunk = f.read(10)
        if chunk == "":
            break
        print chunk

