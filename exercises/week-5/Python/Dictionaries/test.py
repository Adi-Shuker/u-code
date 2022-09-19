

user = {
    "name": "Karolin",
    "username": "ksmart3",
    "age": 27,
    "has_purchased": False
}
student = {
    "name": "Karolin",
    "username": "ksmart3",
    "age": 27,
    "has_purchased": False
}
print(user["name"] + " is " + str(user["age"]) + " years old.")
# outputs: Karolin is 27 years old.
score = None
try:
    score = student["score"]
except KeyError:
    score = 0

score = student.get("score", 0)
# score = 0
fridge = {
    "milk": 1,
    "bananas": 4,
    "juice": 2
}

if fridge["milk"] == 1:
    print("There is one bottle of milk left")
else:
    print("There are " + str(fridge["milk"]) + " bottles of milk left")
values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}


numbers.update(values_to_add)
print(numbers)
closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

# 1
print(len(closet.keys()))
# 2
print(closet["shirts"]["white"])
# 3
print(closet["shirts"]["flamingo-pink"])
# 4
closet["pants"]["jeans"]["organic"] = 7
print(closet["pants"]["jeans"]["organic"])
# 5
closet["pants"]["jeans"]["denim"] -= 4
print(closet["shirts"]["white"])
# 6
if closet["shirts"]["flamingo-pink"] > closet["pants"]["shorts"]["flamingo-pink"]:
    print("top")
else:
    print("bottom")
student = {
    "name": "koko",
    "age": 42,
    "level": "A",
    "hobies": "hello"
}

deleted = student.pop("hobies")
print(deleted)

del student["level"]
print(student)
person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}


for key, value in person.items():
    print(key, value)

nums = [2, 4, 6]
numbers = {str(value): value for value in nums}
print(numbers)
names = ["koko", "momo", "bobo"]


result = {"name" + str(i): v for i, v in enumerate(names)}
print(result)
names = ["koko", "mimi", "bobo", "fifi"]

print({"n" + str(i): names[i]
      for i in range(len(names)) if names[i][1] == "i"})


# {'n1': 'mimi', 'n3': 'fifi'}
def get_squares_dictionary(num):
    return {value: value**2 for value in range(1, num+1)}


print(get_squares_dictionary(5))
