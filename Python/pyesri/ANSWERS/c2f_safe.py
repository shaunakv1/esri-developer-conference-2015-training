#!/usr/bin/python

raw_ctemp = raw_input("Enter Celsius temp: ")

try:
    c_temp = float(raw_ctemp)
except ValueError as err:
    print err
    exit(1)

f_temp = ((9 * c_temp) / 5 ) + 32

print "{0:.1f} C is {1:.1f} F".format(c_temp, f_temp)

