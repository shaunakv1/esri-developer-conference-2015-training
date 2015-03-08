#!/usr/bin/env python
# (c)2015 John Strickler

#  eleeomosynary

d1 = dict()

#         k    v    k     v     k     v    k    v
d2 = { 'spam': 5, 'eggs': 8, 'toast': 3, 'jam': 19 }

d3 = {}   # empty dict

d4 = dict(red=12, blue=77, puce=5, mauve=88, ecru=5)

airports = {
    'SJC': 'San Jose',
    'SFO': 'San Francisco',
    'LAX': 'Los Angeles',
    'PDX': 'Portland',
}

print airports['SJC']
print airports['LAX']
print len(airports)
airports['DFW'] = 'Dallas-Ft. Worth'
print
print airports, '\n'
del airports['LAX']
print airports, '\n'

if 'RDU' in airports:
    print airports['RDU']
else:
    print "Not found"

print airports.get('RDU', 'Not found')
print airports.get('RDU')

print airports.setdefault('IAD', 'Dulles')
print airports, '\n'

for salt, pepper in sorted(airports.iteritems()):
    print salt, pepper
print

print list(airports.iteritems())



