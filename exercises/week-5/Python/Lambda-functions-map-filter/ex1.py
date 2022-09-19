import json

with open("exercises\week-5\Python\Lambda-functions-map-filter\pokemon.json") as pokemon_file:
    pokemon_data = json.load(pokemon_file)
    # ex1
    pokemon_data = list(map(lambda item: {'id': item['id'],
                                          'id': item['id'],
                                          'name': item['name'],
                                          'type': item['type'],
                                          'weight': item['weight'],
                                          'height': item['height'],
                                          'weaknesses': item['weaknesses'],
                                          }, pokemon_data))
    print(pokemon_data[0])
    # Pokemon Names
    print(list(map(lambda p: p["name"], pokemon_data)))
    # Strong Pokemons
    print(list(filter(lambda p: p["weight"] > 100, pokemon_data)))
    # Water Pokemon
    weak_against_water_pokemon = list(map(lambda p: p["name"], filter(
        lambda p: "Water" in p["weaknesses"], pokemon_data)))
    # Check if the result is correct
    res = ['Charmander', 'Charmeleon', 'Charizard', 'Sandshrew', 'Sandslash', 'Nidoqueen', 'Nidoking', 'Vulpix', 'Ninetales', 'Diglett', 'Dugtrio', 'Growlithe', 'Arcanine',
           'Geodude', 'Graveler', 'Golem', 'Ponyta', 'Rapidash', 'Magnemite', 'Magneton', 'Onix', 'Cubone', 'Marowak', 'Rhyhorn', 'Rhydon', 'Magmar', 'Flareon', 'Aerodactyl', 'Moltres']
    print(res == weak_against_water_pokemon)

pokemon_data = json.load(open("pokemon.json"))

print(list(
    map(lambda n: n[0],
        map(lambda fp: fp["name"],
            filter(lambda p:
                   p["weight"] > 80 and
                   p["height"] > 5,
                   pokemon_data)))))
