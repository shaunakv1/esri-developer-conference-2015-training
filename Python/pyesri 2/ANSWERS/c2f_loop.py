#!/usr/bin/python

while True:
	c_temp = raw_input('Enter Celsius temp: ')
	if c_temp.lower() == 'q':
		break
	c_temp = float(c_temp)
	f_temp = ((9 * c_temp) / 5 ) + 32
	print '{0:.1f} C is {1:.1f} F\n'.format(c_temp, f_temp)

