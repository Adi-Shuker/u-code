# Exercise #1 : Timer Decorator
from datetime import datetime


def timer_decorator(func):
    def inner(*args):
        time = datetime.now()
        func(*args)
        print("function runtime: ",  datetime.now()-time)
    return inner


@timer_decorator
def sum_many(num):
    for i in range(num):
        continue
    return sum


@timer_decorator
def sum_many_more(num):
    for i in range(num):
        continue
    return sum


# sum1 = sum_many(10000000)
# sum2 = sum_many_more(50000000)

# Exercise #2 : Print Function Information


def print_information(func):
    def inner(*args, **kwargs):
        print("func name: ", func.__name__)
        print("args: ", args)
        print("kwargs: ", kwargs)
        res = func(*args)
        print("return value:  ", res)
        print("return type: ", type(res))
    return inner


@print_information
def add(*args, **kwargs):
    sum = 0
    for x in args:
        sum += x
    return sum


add(1, 2, age=3, text="hello")

# Exercise #3 : Slow Down


def sleep_one_second(func):
    def inner(*args, **kwargs):
        print("before")
        # time.sleep(1)
        res = func(*args)
        print("after")
    return inner


@sleep_one_second
def add1(*args, **kwargs):
    sum = 0
    for x in args:
        sum += x
    return sum


add1(1, 2, age=3, text="hello")

# Exercise #4 : Number of calls to a func


def count_calls(func):
    counter = 0

    def inner(*args, **kwargs):
        func(*args)
        nonlocal counter
        counter += 1
        print(counter)
    return inner


@count_calls
def add2(*args, **kwargs):
    sum = 0
    for x in args:
        sum += x
    return sum


add2(1, 2, age=3, text="hello")
add2(1, 2, age=3, text="hello")
add2(1, 2, age=3, text="hello")

# Exercise #5 : Cache Decorato


def cache_decorator(func):
    memory = {}

    def inner(n):
        nonlocal memory
        if n in memory.keys():
            return memory[n]
        else:
            res = func(n)
            memory[n] = res
            return res
    return inner


@cache_decorator
def fibonacci(n):
    print("calculating: ", n)
    return 1 if n <= 2 else fibonacci(n-1) + fibonacci(n-2)


print(fibonacci(2))
print(fibonacci(4))
