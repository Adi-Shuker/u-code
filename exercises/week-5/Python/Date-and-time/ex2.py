import datetime


print("time", datetime.datetime.today().strftime("%H:%M:%S"))
# Output: 20200312
print("current1", datetime.datetime.today().strftime("%Y-%m-%d, %H:%M:%S"))
# Output: 03/12/2020
print("current2", datetime.datetime.today().strftime("%Y-%m-%d, %H:%M:%S"))
# Output: 2020-03-12-10.59.53
