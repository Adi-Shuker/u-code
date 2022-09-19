def encode(msg):
    return " ".join(f"{str(ord(c))}" for c in msg)


def decode(decodeMsg):
    return "".join([chr(int(c)) for c in decodeMsg.split(" ")])


print(encode("Hello"))    # "72 101 108 108 111"
print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello"
