#!/usr/bin/python

import sys

max_value = 26
if len(sys.argv) > 1:
    max_value = int(sys.argv[1]) + 1
min_value = 0
tries = 0

while True:
    guess = (max_value + min_value)/2
    ans = raw_input("Is {0} your number? ".format(guess))

    if ans == "q":
        break

    if ans == '':
        continue

    tries = tries + 1

    if ans == "h":
        max_value = guess
    elif ans == "l":
        min_value = guess
    elif ans == "y":
        print "I got it in {0} try(ies)!".format(tries)
        break
    else:
        print "Please enter h, l, or y"
    

