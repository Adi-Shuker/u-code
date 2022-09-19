# Exercise #1 : My Enumerate
def my_enumerate(iterable, start=0):
    count = start
    for item in iterable:
        yield count, item
        count += 1


for index, elem in my_enumerate([10, 20, 30, 40]):
    print(index, elem)

for index, elem in my_enumerate([10, 20, 30, 40], 10):
    print(index, elem)

# Exercise #2 : My Accumulate


def my_accumulate(iterable):
    sum = 0
    for item in iterable:
        sum += item
        yield sum


for elem in my_accumulate([1, 2, 3, 4, 5]):
    print(elem)

# Exercise #3 : Prime Factors Generator


def get_prime_factors_generator(n):
    i = 2
    factors = []
    while i * i <= n:
        if n % i:
            i += 1
        else:
            n //= i
            yield i
    if n > 1:
        yield n


for x in get_prime_factors_generator(100):
    print(x)
# Exercise #4 : Circle Iterator


def CircleIter(iterable, count):
    for i in range(count):
        yield iterable[i % len(iterable)]
    return


for x in CircleIter([1, 2], 5):
    print(x, end=" ")

for x in CircleIter([1, 2, 3], 4):
    print(x, end=" ")
    for y in CircleIter([5, 6], 3):
        print(y, end=" ")
print()
