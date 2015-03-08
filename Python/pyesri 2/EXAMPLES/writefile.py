#!/usr/bin/python

states = [
    'Virginia',
    'North Carolina',
    'Washington',
    'New York',
    'Florida',
    'Ohio',
]

with open("states.txt","w") as ST:
    for state in states:
        ST.write(state + "\n")
