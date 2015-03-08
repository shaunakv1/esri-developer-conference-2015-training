This assumes you have MongoDB installed and on your path.
Specifically, you should be able to run the following without a problem:
mongod --version
mongo --version
mongoimport --version

MacOS or Unix or Linux users may have to reverse \ to / in file references in
mongo-load-* files. They will also have to rewrite them as shell files.

bin\mongo-start to kick off mongodb.
bin\mongo-load-class to load data.