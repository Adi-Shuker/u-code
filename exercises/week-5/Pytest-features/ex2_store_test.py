def store():
    items = ("apple", "banana", "orange")
    amount = (2, 2, 1)
    return dict(zip(items, amount))


items = store()


def buy_banana():
    if items["banana"] > 0:
        items["banana"] = items["banana"]-1
        return True
    return False


def test_buy_banana():
    assert buy_banana() == True


def buy_two_bananas():
    if items["banana"] > 1:
        items["banana"] = items["banana"]-2
        return True
    return False


def test_buy_two_bananas():
    assert buy_two_bananas() == False
