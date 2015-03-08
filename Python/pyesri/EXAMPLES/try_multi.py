#!/usr/bin/python

try:
	x = 5
	y = "cheese"
	z = x + y
	f = open("sesame.txt")
	print "Bottom of try"

except (IOError,TypeError) as err:
	print err

print "And, we're done."
