from sympy import *


class Primes:
    def is_prime(self, number):
        return isprime(number)

    def are_prime_numbers(self, *args):
        for x in args:
            if not self.is_prime(x):
                return False
        return True


primes = Primes()
print(primes.is_prime(13))
print(primes.is_prime(30))
print(primes.are_prime_numbers(2, 13))
