def get_word_value(word):
    sum = 0
    for letter in word:
        sum += ord(letter)-ord("a")+1
    return sum


print(get_word_value("day"))    # 4 + 1 + 25 = 30
