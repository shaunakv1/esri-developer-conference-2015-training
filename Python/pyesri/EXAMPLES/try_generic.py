#!/usr/bin/python

try:
	x = 5
	y = "cheese"
	z = x + y
	f = open("sesame.txt")
	print "Bottom of try"

except Exception as err:
	print err
print "And, we're done."

