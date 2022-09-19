import requests
# ex3
x = requests.get('http://localhost:8000/items/?name=hello')
print(x.status_code)
print(x.content)

# ex5
item_name = input("which item do you want?")
res = requests.get(f'http://localhost:8000/buy-item/?name={item_name}')
item = res.json()[0]
price = item["price"]
inventory = item["inventory"]
print(
    f"Congratulations, you've just bought {item_name} for {price}. There are {inventory} left now in the store.")
