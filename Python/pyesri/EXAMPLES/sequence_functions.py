#!/usr/bin/python

colors = ["red","blue","green","yellow","brown","black"]

months = (
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
)

print "colors: len is {0}; min is {1}; max is {2}".format(
    len(colors),min(colors),max(colors)
)
print "months: len is {0}; min is {1}; max is {2}".format(
    len(months),min(months),max(months)
)

print "sorted:",
for m in sorted(colors):
    print m,
print

phrase = ('dog', 'bites', 'man')
print " ".join(reversed(phrase))

values1 = (0, 1, 0, 0, 0, 0, 1)
values2 = (True, True, True)

print "any(colors):", any(colors)
print "any(values1):", any(values1)
print "all(values1):", all(values1)
print "all(values2):", all(values2)

first_names = "Jennifer Stevie Thomas Rickie".split()
middle_names = "Love Ray Alva Lee".split()
last_names = "Hewitt Vaughn Edison Jones".split()

for first, middle, last in zip(first_names, middle_names, last_names):
    print "{0} {1} {2}".format(first, middle, last)
