#!/usr/bin/python

max_val = 26
min_val = 0
tries = 0

while True:
    guess = (max_val + min_val)/2
    ans = raw_input("Is {0} your number? ".format(guess))

    if ans == "q":
        break

    if ans == '':
        continue

    tries = tries + 1

    if ans == "h":
        max_val = guess
    elif ans == "l":
        min_val = guess
    elif ans == "y":
        print "I got it in {0} try(ies)!".format(tries)
        break
    else:
        print "Please enter h, l, or y"

