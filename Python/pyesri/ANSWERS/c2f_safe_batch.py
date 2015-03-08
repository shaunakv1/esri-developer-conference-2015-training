#!/usr/bin/python

import sys

try:
    c_temp = float(sys.argv[1])
except ValueError as e:
    print e
    sys.exit(1)

f_temp = ((9 * c_temp) / 5 ) + 32

print "{0:.1f} C is {1:.1f} F".format(c_temp, f_temp)
