def get_list_element(my_list, index):
    try:
        print(my_list[index])
    except IndexError as exp:
        print("Caught exception: ", exp.args)


get_list_element([1, 2, 3, 4], 5)
