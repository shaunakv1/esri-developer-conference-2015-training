#!/usr/bin/python

scores_of = {}
num_scores = 0
sum = 0

with open("../DATA/testscores.dat") as f:
    for line in f:
        (name,score) = line.split(":")
        score = int(score)
        scores_of[name] = score
        sum += score
        num_scores += 1

for student,score in sorted(scores_of.iteritems(),key=lambda e: (e[1]),reverse=True):
	grade = None
	if score > 94:
		grade = 'A'
	elif score > 88:
		grade = 'B'
	elif score > 82:
		grade = 'C'
	elif score > 74:
		grade = 'D'
	else:
		grade = 'F'
	print "{0:<20s} {1:2d} {2}".format(student,score,grade)

print "\naverage score is  {0:.2f}\n".format(float(sum)/num_scores)
