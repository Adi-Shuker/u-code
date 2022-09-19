my_list = ['I', 2, 'Love', 4, 56, 'Coding', "Python", "in", [8, 9, 10]]


def test_number():
    assert my_list.count(3) == 0
    assert my_list.count(56) > 0  # Should assert if number 56 is in my_list


def test_str():
    assert my_list.count('I') > 0
    assert my_list.count("Love") > 0
    assert my_list.count('Coding') > 0

    # Should assert if "I", "Love" and "Coding" are in my_list


def test_upper_str():
    for item in my_list:
        if type(item) == str:
            # Should assert if all the strings in my_list are in upper case
            assert str(item[0]) == str(item[0]).upper()


def test_negative():
    # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
    assert my_list.count(6) == 0
