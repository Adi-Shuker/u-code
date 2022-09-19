import re
# is_palindrome


def is_palindrome(str):
    return str == str[::-1]


print(is_palindrome("dood"))
print(is_palindrome("doodi"))

# Reverse Words in a Sentence


def reverse_words(sentence):
    return " ".join(list(map(lambda w: w[::-1], sentence.split(" "))))


print(reverse_words("hello world"))

# Swap Two Variables
x = 1
y = 2
x, y = y, x
print(x, y)

# Sum Even Items
numbers = [1, 2, 1, 3, 1]
print(sum(numbers[1::2]))

# Duplicate


def duplicate(list):
    return list+list


print(duplicate([1, 2, 3]))

# Change Spaces


def change_spaces(str):
    return str.replace(" ", "@")


print(change_spaces("You got it"))

# Number of spaces


def number_of_space(str):
    return str.count(" ")


print(number_of_space("my name is what"))
# Number of all spaces


def number_of_all_space(str):
    return len(re.findall(r"[\n\t\s]", str))


print(number_of_all_space("m y name is wh\n\tat"))
# Largest Lexicographically


def largest_lexicographically(sentence):
    return sorted(sentence.replace(".", "").split(" "), reverse=True)[0]


print(largest_lexicographically("Imagination is .more important than knowledge."))
# Longest Word


def longest_word(sentence):
    return sorted(map(lambda word: len(word), sentence.replace(".", "").split(" ")), reverse=True)[0]


print(longest_word("If you can't explain it simply you don't understand it well enough."))
# Reverse Sentence
str = "hello world"
print(str[::-1])

# Reverse Word Order
str = "hello dear world"
print(" ".join(str.split(" ")[::-1]))

# Extensions


def fibonacci(n):
    return 1 if n <= 2 else fibonacci(n-1) + fibonacci(n-2)


def factorial(n):
    return n * factorial(n - 1) if n > 1 else 1


print(factorial(6))
# Fibonacci 6 => 8


def remove_duplicate(my_list):
    return list(dict.fromkeys(my_list))


print(remove_duplicate([1, 2, 1, 3, 3, 2, 2]))
