#!/usr/bin/python

import sys

ctemp_str = raw_input("Enter Celsius temp: ")
ctemp = float(ctemp_str)
ftemp = ((9 * ctemp) / 5 ) + 32

print "{0:.1f} C is {1:.1f} F".format(ctemp, ftemp)

