import pytest
from collections import Counter


def is_anagram(str1, str2):
    return Counter(str1) == Counter(str2)


@pytest.mark.parametrize("str1, str2, res", [("elbow", "below", True), ("meteor", "remote", True), ("meteo", "remote", False)])
def test_is_anagram(str1, str2, res):
    assert is_anagram(str1, str2) == res
