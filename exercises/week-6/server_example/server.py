import requests
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from store import store
app = FastAPI()
app.mount("/static", StaticFiles(directory="exercises\week-6\server_example\static"), name="static")


@app.get('/')
def root():
    return FileResponse('exercises\week-6\server_example\static\download.jpeg')


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get(
        'https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()
# ex1


@app.get("/sanity")
async def sanity_check():
    return {"message": "Server is up and running smoothly"}


@app.get("/files/{name}")
async def get_file(name):
    return FileResponse(f"exercises\week-6\server_example\static\{name}")

# ex2


@app.get("/items/")
async def get_item(name):
    res = [item for item in store if item["name"] == name]
    return {"price": "None"} if len(res) == 0 else {"price": res[0]["price"]}


@app.get("/buy-item/")
async def buy_item(name):
    res = [item for item in store if item["name"] == name]
    if res[0]["inventory"] > 0:
        res[0]["inventory"] -= 1
    return res

# ex6


@app.get("/sale/")
async def store_manager(admin):
    if admin == "true":
        items = [item for item in store if item["inventory"] > 10]
        for item in items:
            item["price"] /= 2
    return store

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
