import json
# the_file = open("exercises\week-5\File-IO\example.txt")
# groceries = the_file.read().split("\n")
# print(groceries)
# attendance = open("exercises\week-5\File-IO\\attendance.txt")
# student_attendance = attendance.read().split("\n")
# print(Counter(student_attendance))
# with open('exercises\week-5\File-IO\example.txt', 'a') as the_file:
#     the_file.write("Pineapple\n")
# # with open("exercises\week-5\File-IO\\new_file.txt", "w") as the_file:
# #     the_file.write("good text\n")
# #     the_file.write("great text\n")
# #     the_file.write("The Best Text\n")
# # with open("exercises\week-5\File-IO\\new_file1.txt", "a") as the_file:
# #     the_file.write("good text\n")
# #     the_file.write("great text\n")
# #     the_file.write("The Best Text\n")
# goodies = ["Barnacle", "Circus", "Rake", "Cherry",
#            "Steam", "Toothpaste", "Knee", "Coat"]
# with open("exercises\week-5\File-IO\example.txt", "a") as the_file:
#     for name in goodies:
#         if name.startswith("C"):
#             the_file.write(f"{name}\n")
the_file = open("exercises\week-5\File-IO\\turtles.json")
# print(turtles_data[0]['gender'])
# the_file = open("exercises\week-5\File-IO\\turtles.json")
# turtle_data = json.load(the_file)
# with open("exercises\week-5\File-IO\\turtles.json", "w") as the_file:
#     turtle_data.append({"test": 0})
#     json.dump(turtle_data, the_file)
# some_data = {"animal": "Lion", "job_description": "King"}
# with open("new_file.json", "w") as f:
#     json.dump(some_data, f)


# Spot Check 3

# Loading the turtles data
the_file = open("exercises\week-5\File-IO\\turtles.json")
turtle_data = json.load(the_file)

# Empty "template" dict
summary = {
    "male": {
        "total": 0,
        "alive": 0
    },
    "female": {
        "total": 0,
        "alive": 0
    }
}

# Iterating over the data and updatind `summary` accordingly
for turtle in turtle_data:
    if turtle["gender"] == "male":
        summary["male"]["total"] += 1
        if turtle["condition"]["status"] == "alive":
            summary["male"]["alive"] += 1
    else:
        summary["female"]["total"] += 1
        if turtle["condition"]["status"] == "alive":
            summary["female"]["alive"] += 1

# Create the new file with the summary data
with open("turtles_summary.json", "w") as f:
    json.dump(summary, f)
