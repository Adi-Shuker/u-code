# ex1
from asyncio.windows_events import NULL


my_tuple = (0, "1", 2.0, None, {}, [], NULL, True)
# ex2
print(my_tuple[-4], my_tuple[3])
# ex3
days = ("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday")
print(days[:2]+days[3:])
# ex4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
print(numbers[::-1])
# ex5
# 1
# (1, 2, 3) = > (3, 2)
print(numbers[:0:-1])
# 2
# (2, 4, 6, 8, 10, 12) = > (12, 10, 8, 6, 4)
print(print(numbers[:1:-2]))
