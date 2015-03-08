#!/usr/bin/python

try:
	x = 5
	y = "cheese"
	z = x + y
	print "Bottom of try"

except TypeError as err:
	print err
print "And, we're done."

