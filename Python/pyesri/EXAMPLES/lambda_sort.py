#!/usr/bin/python

fruit = ["pomegranate","cherry","apricot","date","Apple","lemon","Kiwi",
"ORANGE","lime","Watermelon","guava","papaya","FIG","pear","banana",
"Tamarind","persimmon","elderberry","peach","BLUEberry","lychee",
 "grape" ]

nums = [800,80,1000,32,255,400,5,5000]

fs1 = sorted(fruit,key=lambda e: e.lower)
print "Ignoring case:"
print " ".join(fs1)
print

fs2 = sorted(fruit,key=lambda e: (len(e),e.lower()))
print "By length, then name:"
print " ".join(fs2)
print

fs3 = sorted(nums)
print "Numbers sorted numerically:"
for n in fs3:
    print n,
print
print

fs4 = sorted(nums,key = lambda e: str(e))
print "Numbers sorted as strings:"
for n in fs4:
    print n,
print

