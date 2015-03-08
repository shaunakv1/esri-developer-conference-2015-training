#!/usr/bin/python

x = 5
y = 10

try:
	z = x + y
except TypeError as err:
	print err
else:
	print "All is well..."
print "And, we're done."

