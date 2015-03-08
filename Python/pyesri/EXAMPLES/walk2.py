#!/usr/bin/env python
# (c)2015 John Strickler

# find files greater than 1K in size
import os

for curr_dir, dir_list, file_list in os.walk(".."):
    for file_name in file_list:
        full_path = os.path.join(curr_dir, file_name)
        file_size = os.path.getsize(full_path)
        if file_size > 1024:
            print '{0:20s} {1:6d}'.format(file_name, file_size)
