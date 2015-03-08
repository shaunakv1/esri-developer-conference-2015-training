#!/usr/bin/python

from tempconv import c2f

while True:
	c = raw_input('Enter Celsius temp: ')
	if c.lower() == 'q':
		break
	c = float(c)
	f = c2f(c)
	print '{0:.1f} C is {1:.1f} F\n'.format(c,f)

