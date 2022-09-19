def string_number_to_int(str):
    res = 0
    for c in str:
        if (ord(c) < ord('0') or ord(c) > ord('9')):
            return
        res = res*10
        res += (ord(c)-ord('0'))

    return res


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC"))
