#!/usr/bin/python

mylist = [ "Idle","Cleese","Chapman","Gilliam","Palin","Jones"]

mytup = ("Roger","Old Woman","Prince Herbert","Brother Maynard")
mystr = "She turned me into a newt"


for p in mylist:
	print p
print

for r in mytup:
	print r
print

for pos,person in enumerate(mytup):
	print pos,person
print

for ch in mystr:
	print ch,
print