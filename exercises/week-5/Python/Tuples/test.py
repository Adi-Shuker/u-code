fruits_tuple = ("apple", "orange", "banana")
print(fruits_tuple)
# output: ('apple', 'orange', 'banana')
mixed_tuple = (0, "apple", 3.4)
print(mixed_tuple)
# output: (0, 'apple', 3.4)
# tuple with one value
num_tuple = (10,)
print(num_tuple)  # (10,)

# This is aslo tuple with one value
num_tuple = 10,
print(num_tuple)  # (10,)

# This is a string, NOT a tuple.
not_tuple = ('apple')
print(not_tuple)  # apple

# This is an int, NOT a tuple.
not_tuple2 = (10)
print(not_tuple2)  # 10
empty_tuple = ()
print(empty_tuple)  # ()

# Accessing Tuple Items: Indices
numbers = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(numbers[::2])
