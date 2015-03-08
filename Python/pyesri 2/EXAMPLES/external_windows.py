#!/usr/bin/env python

import os
# just launch a command
os.system('ipconfig')

# open a command and read its output
d = os.popen(r'dir DATA')

for entry in d:
    print entry,

# backticks (``)  equiv
hostname = os.popen('hostname').read()[:-1]

print 'Hostname is',hostname

