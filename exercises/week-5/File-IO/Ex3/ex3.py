import json
import csv
with open("exercises\week-5\File-IO\Ex3\ex3.txt") as data:
    lines = data.read().split("\n")
    print(lines)
    json_lines = []
    for line in lines:
        json_lines.append({line.replace(" ", "").split(
            "-")[0]: line.replace(" ", "").split("-")[1]})
    print(json_lines)
    with open('exercises\week-5\File-IO\Ex3\ex3.json', 'w') as fp:
        json.dump(json_lines, fp)
    with open('exercises\week-5\File-IO\Ex3\ex3.csv', "w", newline="") as csv_file:
        csv_writer = csv.writer(csv_file)
        csv_writer.writerow(['item', 'price'])
        for line in lines:
            item = line.replace(" ", "").split("-")[0]
            price = line.replace(" ", "").replace("\n", "").split("-")[1]

            data_in_list = [f"{item}: {price}"]
            csv_writer.writerow(data_in_list)
