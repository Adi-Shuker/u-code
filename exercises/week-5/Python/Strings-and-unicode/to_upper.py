def to_upper_case(c):
    if ord(c) < ord('a') or ord(c) > ord('z'):
        return c
    return chr(ord(c)-ord('a')+ord('A'))


print(to_upper_case("d"))    # "D"
print(to_upper_case("Q"))    # "Q" (no change)
print(to_upper_case("!"))    # "!" (no change)


def upper(str):
    return "".join(to_upper_case(c) for c in str)


print(upper("I love Python!"))    # "I LOVE PYTHON!"
