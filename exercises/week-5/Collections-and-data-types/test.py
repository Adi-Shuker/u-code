# i = 9
# print(type(i))    # <class 'int'>
# f = 5.25
# print(type(f))    # <class 'float'>
# b = True
# print(type(b))    # <class 'bool'>
# x = "Just a string"
# print(id(x))
x = 10
y = x
print(id(x))
print(id(y))
print(id(10))
print(id(x) == id(y))
print(id(y) == id(10))
a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False
print(id(a), id(b))     # different numbers
s1 = "Kush"
s2 = "Kush"
print(s1 == s2)           # True
print(s1 is s2)           # True
print(id(s1), id(s2))     # same numbers
x = [1, 2, 3]
copy = x
x += [4]              # changing the list
print(id(x))              # [1,2,3,4]
print(id(copy))          # [1,2,3,4]
y = (1, 2, 3)
copy = y
print(id(y))     # (1,2,3,4)
print(id(copy))  # (1,2,3)
y += (4,)    # changing the tuple
print(id(y))     # (1,2,3,4)
print(id(copy))  # (1,2,3)
a = "always the same"
b = "always the same"
b += "a"
print(id(a))
print(id(b))
a = [1, 2]
b = [1, 2]
print(id(a))
print(id(b))
nums = (1, 2, 3)
duplicated = nums*2
print(duplicated)
word = "This is so cool"
part_of_it = word[-4:]
print(part_of_it.index("o"))
