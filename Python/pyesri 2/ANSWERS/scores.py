#!/usr/bin/python

scores_of = {}
num_scores = 0
sum_of_scores = 0

with open("../DATA/testscores.dat") as f:

    for line in f:
        (name,raw_score) = line.split(":")
        score = int(raw_score)
        scores_of[name] = score
        sum_of_scores += score
        num_scores += 1

for student in scores_of:
    grade = None
    if scores_of[student] > 94:
        grade = 'A'
    elif scores_of[student] > 88:
        grade = 'B'
    elif scores_of[student] > 82:
        grade = 'C'
    elif scores_of[student] > 74:
        grade = 'D'
    else:
        grade = 'F'
    print "{0:<20s} {1} {2}".format(student,scores_of[student],grade)

print "\naverage score is  {0:.2f}\n".format(float(sum_of_scores)/num_scores)
