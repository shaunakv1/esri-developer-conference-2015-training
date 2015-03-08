#!/usr/bin/python

count = 1
while count < 10:
    print "count is",count
    count += 1

while True:
	name = raw_input("Enter a name (or q to quit): ")
	if name == '':
		continue
	if name == "q":
		print "goodbye!"
		break
	print "welcome,", name
