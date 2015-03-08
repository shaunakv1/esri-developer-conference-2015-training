#!/usr/bin/python

with open('../DATA/fruit.txt') as fh_fruit:

    ufruits = ( fruit[:-1].upper() for fruit in fh_fruit )
    
    print ufruits
    print
    for fruit in (ufruits):
        print fruit
