#!/usr/bin/python

x = 5

def spam():
	x = 22   # does not set global x
	print "spam(): x is", x
	y = "wolverine"
	print "spam(): y is", y

def eggs():
	global x
	print "eggs(): x is", x
	x = "wolverine"
	print "eggs(): x is", x

spam()
eggs()
print "Main: x is ",x
