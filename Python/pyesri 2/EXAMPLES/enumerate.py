#!/usr/bin/python

colors = ["red","blue","green","yellow","brown","black"]

months = (
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
)

for i, color in enumerate(colors):
    print "{0} {1}".format(i, color)
print
    
for num,month in enumerate( months, 1 ):
    print "{0} {1}".format( num, month )
