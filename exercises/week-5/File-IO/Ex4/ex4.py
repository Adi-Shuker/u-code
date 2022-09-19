from csv import reader
import json
data = {"Report": "***", "Number": "***",
        "Time": "***", "Owner": "***", "Category": "***", "Status": "***"}

with open('exercises\week-5\File-IO\Ex4\ex4.txt', 'w') as txt_file:
    with open('exercises\week-5\File-IO\Ex4\ex4.json') as json_file:
        json_data = json.load(json_file)
        counter = 0
        for data in json_data:
            print(data)
            txt_file.write(f"Report: {data['name']}\n")
            txt_file.write(f"Number: {counter}\n")
            txt_file.write(f"-------\n")
            txt_file.write(f"Time: {data['time']}\n")
            txt_file.write(f"Owner: {data['owner']}\n")
            txt_file.write(f"Category: {data['cat']} = {data['sub-cat']}\n")
            if data['status'] == 1:
                txt_file.write(f"PASS\n")
            else:
                txt_file.write(f"FAIL\n")
            txt_file.write(f"========================\n")
            counter += 1
    csv_data = []
    with open('exercises\week-5\File-IO\Ex4\ex4.csv') as csv_file:
        csv_reader = reader(csv_file)
        columns = next(csv_reader)
        for line in csv_reader:
            item = {}
            for column, value in zip(columns, line):
                item[column] = value
            csv_data.append(item)
    # print(csv_data)
