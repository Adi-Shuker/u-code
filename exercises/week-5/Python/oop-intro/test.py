class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


person1 = Person("Liam", 38)


class Restaurant:
    def __init__(self, name, ratings, is_vegetarian):
        self.name = name
        self.ratings = ratings
        self.is_vegetarian = is_vegetarian

    def introduce(self):
        print("Hi there, I am " + self.name)

    def get_menu(self):
        if self.is_vegetarian:
            print("We have vegetables")
        else:
            print("We have meat")


r1 = Restaurant("Zoozaazo", 4, False)
r2 = Restaurant("Top La Pompei", 3, False)
r3 = Restaurant("El Viego", 5, True)
print(r3.ratings)
r2.get_menu()
