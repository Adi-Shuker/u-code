import calendar
import datetime

print(calendar.isleap(2010))
print(calendar.isleap(2020))
counter = 0
for i in range(2020, 2081):
    if calendar.isleap(i):
        counter += 1
print(counter)
print(calendar.day_name[
    datetime.date(day=14, month=3, year=2028).weekday()])
