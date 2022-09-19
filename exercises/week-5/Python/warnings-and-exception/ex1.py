import math


try:
    dividend = float(input("Enter the dividend: "))
    divisor = float(input("Enter the divisor: "))
    quotient = dividend/divisor
    print(math.floor(quotient))
except ZeroDivisionError as exp:
    print("Caught ZeroDivisionError exception: ", exp.args)
except ValueError as exp:
    print("Caught ValueError exception: ", exp.args)
