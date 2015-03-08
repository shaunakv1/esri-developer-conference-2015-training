#!/usr/bin/python

import re

DATA_WIDTH = 40

rx_record = re.compile(r'<OBJECT_ID>(.*?)</OBJECT_ID>\s*<OBJECT_SEQ_NO>(.*?)</OBJECT_SEQ_NO>\s*<OBJECT_DATA>(.*?)</OBJECT_DATA>',re.I | re.S)

rx_obj_id = re.compile(r'<OBJECT_ID>(.*?)</OBJECT_ID>',re.I)

info = {}

with open("../DATA/rxml_data.xml") as XML:
    alldata = XML.read()

    # loop through each record
    for rec in rx_record.finditer(alldata):
        info[rec.group(1)] = [ rec.group(2),rec.group(3) ]

    XML.seek(0)  # rewind file for 2nd pass

    # find line numbers for each object ID
    for num,line in enumerate(XML):
        m = rx_obj_id.search(line)
        if m:
            id = m.group(1)
            info[id].append(num)


# build a header string
header = "OBJ ID  SEQ  {0:{1}s} PG".format('DATA',DATA_WIDTH)
print '-' * ( len(header) + 1 )
print header
print '-' * ( len(header) + 1 )

# loop through info; print key, elements of value
# (i.e., OBJID, SEQ, CONTENT, LINE_NUM)
for k,v in sorted(info.iteritems(),key=lambda e: int(e[1][2])):
   print("{0:>6s}   {1:3s} {2:{3}s} {4:03d}".format(
        k,v[0],v[1][:20],DATA_WIDTH,v[2]
   ))

