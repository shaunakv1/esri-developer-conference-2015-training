#!/usr/bin/python

class Simple(object):
	def __init__(self):
		self._msg = "Hello"

	def get_message(self):
		return self._msg

if __name__ == "__main__":
	s = Simple()
	print s.get_message()

