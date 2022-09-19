from fastapi import FastAPI
from fastapi import Request
import uvicorn
app = FastAPI()

words_counter = {}


@app.get("/sanity")
def sanity_check():
    return {"message": "hello world"}


@app.get("/count/{word}")
def get_word_counter(word):
    if words_counter[word] == None:
        return {"count": 0}
    return {"count": words_counter[word]}


@app.post("/add-word")
async def add_word(request: Request):
    json = await request.json()
    word = json["word"]
    if word in words_counter.keys():
        words_counter[word] += 1
    else:
        words_counter[word] = 1
    return {"text": f"Added {word}", "currentCount": {words_counter[word]}}


@app.post("/add-words")
async def add_word(request: Request):
    json = await request.json()
    sentence = json["sentence"].replace(",", "").split(" ")
    num_new_words = 0
    num_old_words = 0
    for word in sentence:
        if word in words_counter.keys():
            num_old_words += 1
            words_counter[word] += 1
        else:
            num_new_words += 1
            words_counter[word] = 1
    return {"text": f"Added {num_new_words} words, {num_old_words} already existed", "currentCount": -1}


@app.delete("/delete-word/{word}", status_code=200)
def delete_word(word):
    if word in words_counter:
        del words_counter[word]
        return {"message": "word deleted"}
    return {"message": "word does not exist"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
