def add_to_list(value, nums=None):
    nums = nums or []
    nums.append(value)
    return nums


print(add_to_list(1))
print(add_to_list(2))


def all_arguments(num, *args, **kwargs):
    print("regular argument", num)
    print("args", args)
    print("kwargs", kwargs)


all_arguments(3, "arg1", "arg2", arg3=3, arg4=[1, 2])


def hello(name="Margo"):
    """this is a greeting function"""
    print(f'Hello {name.capitalize()}!')


print("Documentation: ", hello.__doc__)
print("Name: ", hello.__name__)
print("Code at: ", hello.__code__)
print("defaults : ", hello.__defaults__)


def get_power_of(exponent):
    def inner(x):
        return x ** exponent
    return inner
