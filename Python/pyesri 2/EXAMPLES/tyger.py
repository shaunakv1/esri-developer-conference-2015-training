#!/usr/bin/python

with open("../DATA/tyger.txt","r") as TY:
    for line in TY:
        print line[:-1]  # remove \n from each line

