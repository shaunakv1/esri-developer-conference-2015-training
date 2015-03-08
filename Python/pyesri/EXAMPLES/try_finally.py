#!/usr/bin/python

try:
	x = 5
	y = "cheese"
	z = x + y
	print "Bottom of try"
except Exception as err:
	print err
	exit()
finally:
	print "Cleaning up..."

