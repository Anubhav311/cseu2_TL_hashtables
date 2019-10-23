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
        # add something to the end
        if self.count >= self.capacity:
            self.resize_array()

        self.storage[self.count] = value
        self.count += 1

    def insert(self, value, index):
        # add to somewhere
        if self.count >= self.capacity:
            self.resize_array()

        for i in range(self.count, index, -1):
            self.storage[i] = self.storage[i-1]

        self.storage[index] = value
        self.count += 1

    def remove(self, index):
        # find the index we want
        value = self.storage[index]
        # replace it with next value and move down the list
        for i in range(index, self.count - 1, 1):
            self.storage[i]  = self.storage[i+1]

        # subtract from count
        self.count -= 1
        # return it
        return value

    def print(self):
        pass

    def resize_array(self):
        pass

    def add_to_front(self, value):
        pass
