
print(ord('C'))  # 67

print(chr(67))  # C

res = ""

for c in "abc":
    code = ord(c)
    incremented_code = code + 1
    incremented_char = chr(incremented_code)
    res += incremented_char

print(res)
print("".join([chr(ord(c)+1)for c in "abc"]))
# Unicode Table
# 1
for c in range(200, 1000):
    print(f"{c}: {chr(c)}")

# 2


def unicode(start, end):
    for c in range(start, end):
        print(f"{c}: {chr(c)}")


print("This is a new\n dawn")
print(r"This is a new\n dawn")
# Bytes
byte_string = b'ABC'
print(bytes([65, 66, 67]))  # ABC
print(b'ABC'.hex())  # 414243
print("ABC".encode('ascii'))
print("ABC".encode('utf-8'))
