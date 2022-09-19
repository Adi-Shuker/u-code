def encode(msg, shift):
    encodeMsg = ""
    for c in msg:
        if ord(c)+shift <= ord("Z"):
            encodeMsg += chr(ord(c)+shift)
        else:
            encodeMsg += chr(ord(c)+shift-ord("Z") + ord("A")-1)

    return encodeMsg


def decode(msg, shift):
    encodeMsg = ""
    for c in msg:
        if ord(c)-shift >= ord("A"):
            encodeMsg += chr(ord(c)-shift)
        else:
            encodeMsg += chr(ord(c)-shift+(ord("Z")-ord("A"))+1)

    return encodeMsg


print(encode("ABXYZ", 3))   # "DEABC"
print(decode("DEABC", 3))    # "ABXYZ"
