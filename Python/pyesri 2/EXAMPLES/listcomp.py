#!/usr/bin/python

fruits = ['watermelon','apple','mango','kiwi','apricot','lemon','guava']

ufruits = [ fruit.upper() for fruit in fruits ]
afruits = [ fruit.title() for fruit in fruits if fruit.startswith('a') ]

print "ufruits:", " ".join(ufruits)
print "afruits:", " ".join(afruits)
print

values = [ 2, 42, 18, 92, "boom", ['a','b','c'] ]

doubles = [ v * 2 for v in values ]

print "doubles:",
for d in doubles:
    print d,
print

dirty = [ '   gronk    ','pulaba       ','        floog' ]

clean = [ d.strip() for d in dirty ]
for c in clean:
    print ">{0}<".format(c)
print

nums = [ int(s) for s in values if isinstance(s,int) ]
for n in nums:
    print n,
print "\n"

powers = [ (i, i**2, i**3) for i in range(1,11) ]

for num,square,cube in powers:
    print "{0:2d} {1:3d} {2:4d}".format(num,square,cube)
print

suits = ('Clubs','Diamonds','Hearts','Spades')
ranks = '2 3 4 5 6 7 8 9 10 J Q K A'.split()

deck = [ rank + '-' + suit for suit in suits for rank in ranks ]
print deck
