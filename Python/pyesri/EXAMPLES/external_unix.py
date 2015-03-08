#!/usr/bin/env python

import os 

os.system("who") 

with os.popen("ls -l /tmp","r") as ls: 
    for entry in ls: 
        print entry[:-1] 
    print 

# get host name
host = os.popen("uname -n").read()

print host
