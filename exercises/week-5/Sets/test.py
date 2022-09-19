s = set()

print(type(s))
print(s)
s = {3, "Yossi", False, (1,), None}
s = set([4, 3, 2, 1])

s  # {1, 2, 3, 4}
s = {3, 6, 'bibi', ('Simon', 'Garfunkel')}
s.add(5)
print(s)
s.update([11, 22], (55,), ('mimi',))
print(s)
s.discard('Avi')  # return none if not exisits
# s.remove('Itzik') //return exception if not exisits
s = {5, 6, 7, 8, 9}
s.pop()
print(s)
s.clear()
print(s)
s1 = {1, 3, 5}
s2 = {2, 4}


s1.union(s2)  # {1,3,5,2,4}

s1 | s2  # bitwise operation => {1,3,5,2,4}
s1 = {1, 2, 5}
s2 = {2, 4, 1}

s1.intersection(s2)  # {1,2}

s1 & s2
s1 = {1, 2, 5}
s2 = {2, 4, 1}
s1 - s2  # {5}
s1.difference(s2)  # {5}
s2.difference(s1)  # {4}
s1.difference([6, 7, 5])
s1 = {1, 2, 5}
s2 = {2, 4, 1}
print(s1 ^ s2)  # {4,5}
s1.symmetric_difference(s2)
(s1 | s2 - (s1 & s2))

# isdisjoint()
s1 = {1, 2, 3, 4}
s2 = {1, 5, 6, 7}
s3 = {5, 6, 7, 8}

print(s1.isdisjoint(s2))  # Flase
print(s1.isdisjoint(s3))  # True
print(s2.isdisjoint(s3))  # False

# issuperset()
s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))
# issuperset()
# This method returns True if the set in use (perfectly) contains another set:
s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()

print(s1.issuperset(s2))  # True
print(s1.issuperset(s3))  # False
print(s1.issuperset(s4))  # True
print(s1.issuperset(s5))  # True

# issubset()
# t returns True if the set in use is contained by another set:
print(s2.issubset(s1))  # True
print(s2.issuperset(s1))  # False
# get all unique element in list
lst = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]

set(lst)
# fint all comoon item in to list
s1 = [1, 2, 3, 4, 5, 6]
s2 = [4, 5, 6, 7, 8, 9]

set(s1) & set(s2)
# Frozen Set
fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)
set_ = {1, 2}
frozenset_ = frozenset((1, 3, 4))


dictionary = {}
dictionary[frozenset_] = 1  # valid
# dictionary[set_] = 1  # throws Error
