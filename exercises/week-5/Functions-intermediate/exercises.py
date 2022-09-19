def my_reduce(function, iterable, initial=None):
    iterator = iter(iterable)
    if initial == None:
        initial = next(iterator)
    res = initial
    for item in iterator:
        res = function(item, res)
    return res


print(my_reduce(lambda a, b: a*b, [1, 2, 3, 4, 5], 1))
print(my_reduce(lambda a, b: a*b, [1, 2, 3, 4, 5], 0.5))

# Max Arguments


def max_arguments():
    max = 0

    def inner(*args):
        nonlocal max
        if max < len(args):
            max = len(args)
        return max
    return inner


func = max_arguments()
print(func())           # 0
print(func(1, 2, 3, 7))    # 4
print(func(9, 2))        # 4
print(func(1, 2, 3, 4, 5))  # 5
# Increase


def wrapper():
    employee = {
        "name": "Momo",
        "age": 61,
        "salary": 10000
    }

    def increase(key, amount=1):
        nonlocal employee
        employee[key] += amount
        return employee
    return increase


func = wrapper()
func("age")
print(func("salary", 1000))
