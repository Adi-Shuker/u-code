def divide(x, y):
    try:
        print(f'{x}/{y} is {x / y}')
    except ZeroDivisionError as e:
        print("Caught ZeroDivisionError exception: ", e)
    except TypeError as e:
        print("Caught TypeError exception: ", e)
    except ValueError as e:
        print("Caught ValueError exception: ", e)


# divide(10, int("hi"))
divide(10, 0)
divide("asf", 1)
divide(3, 1, 2)
