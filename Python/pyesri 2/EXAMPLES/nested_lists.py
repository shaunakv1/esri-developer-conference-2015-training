#!/usr/bin/python

palm_springs_celebs = [
   ('Bob', 'Hope', 'Golf'),
   ('William', 'Holden', 'Tennis'),
   ('Dinah', 'Shore', 'Tennis'),
]

print 'palm_springs_celebs[0]:', palm_springs_celebs[0]
print 'palm_springs_celebs[0][1]:', palm_springs_celebs[0][1]
print 'palm_springs_celebs[0][:2]:', palm_springs_celebs[0][:2]
print

for first, last, sport in palm_springs_celebs:
   print "{0} {1} plays {2} in Palm Springs".format(first, last, sport)
print

