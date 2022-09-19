import pytest


def fibonacci(n):
    return 1 if n <= 2 else fibonacci(n-1) + fibonacci(n-2)


@pytest.mark.parametrize("index, res", [(2, 1), (5, 4)])
def test_fibonacci(index, res):
    assert fibonacci(index) == res, "Got error in test_fibonacci!"
