def find_index(items, item):
    for index, value in enumerate(items):
        if value == item:
            return index
        return -1


numbers = [11, 3, 64, 17, 94]
for i, v in enumerate(numbers, 100):
    print(i, v)

string_iterator = iter("Python")

print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
# We will get the second argument None if there is no next item.
print(next(string_iterator, None))
list_iterator = iter([])
try:
    print(next(list_iterator))  # throws StopIteration exception
except StopIteration as e:
    print("no more items")
