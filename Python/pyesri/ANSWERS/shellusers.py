#!/usr/bin/python

count_of = {}
with open("../DATA/passwd") as pw:
    for line in pw:
        (user,epw,uid,gid,comment,home,shell) = line[:-1].split(":")
        if shell == "":
            shell = "NONE"
        if shell in count_of:
            count_of[shell] = count_of[shell] + 1
        else:
            count_of[shell] = 1

for shell,count in count_of.iteritems():
    print "{0:5d} {1}".format(count,shell)
