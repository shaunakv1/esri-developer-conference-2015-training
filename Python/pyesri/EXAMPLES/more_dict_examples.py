#!/usr/bin/python

airports = { 'IAD':"Dulles",'RDU':"Raleigh-Durham",
	"DCA":"Reagan", "BWI":"Baltimore/Washington",
	"EWR":"Newark","ABQ":"Albuquerque",
	"GDB":"Granite Falls" }

print "*** keys only"
for abbr in airports:
	print abbr

print
print "*** keys and values (not sorted)"
for abbr, airport in airports.iteritems():
	print "{0:3s} {1:<20s}".format(abbr, airport)

print
print "*** keys and values (sorted)"
for abbr,airport in sorted(airports.iteritems()):
	print "{0:3s} {1:<20s}".format(abbr,airport)
