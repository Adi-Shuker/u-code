quizzes = [
    {"name": "Guillermo", "quiz1": 80, "quiz2": 85, "quiz3": 82},
    {"name": "Jamie", "quiz1": 78, "quiz2": 72, "quiz3": 80},
    {"name": "Otto", "quiz1": 92, "quiz2": 89, "quiz3": 96},
    {"name": "Christina", "quiz1": 91, "quiz2": 85, "quiz3": 94},
    {"name": "Ceasar", "quiz1": 62, "quiz2": 65, "quiz3": 73},
    {"name": "Barbara", "quiz1": 78, "quiz2": 68, "quiz3": 78},
    {"name": "Rosan", "quiz1": 84, "quiz2": 85, "quiz3": 81},
    {"name": "Marco", "quiz1": 79, "quiz2": 72, "quiz3": 87},
]

for quiz in quizzes:
    with open(f"exercises\week-5\File-IO\Ex1\{quiz['name']}_final_report.txt", "w") as the_file:
        the_file.write(f"Quiz 1: {quiz['quiz1']}\n")
        the_file.write(f"Quiz 2: {quiz['quiz2']}\n")
        the_file.write(f"Quiz 3: {quiz['quiz3']}\n")
        the_file.write("----\n")
        average = (quiz['quiz2']+quiz['quiz2']+quiz['quiz2'])/3
        the_file.write(f"Average: {average}")
