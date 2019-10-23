# THINGS WE NEED FOR AN ADVANCE ARRAY
# size of it and protection from going past that
# size of objects
# to append need space
# track allocated and used
# if we run out of space, we need to make a new one with more space
# then copy each item over

class DynamicArray:
    def __init__(self, capacity=8):
        self.count = 0
        self.capacity = capacity
        self.storage = [None] * capacity

    def append(self, value):
        pass

    def insert(self, value, index):
        pass

    def remove(self, index):
        pass

    def print(self):
        pass

    def resize_array(self):
        pass

    def add_to_front(self, value):
        pass
