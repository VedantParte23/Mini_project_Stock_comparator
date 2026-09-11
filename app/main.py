from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "hii"}

@app.get("/hello")
def say_hello():
    return {"message": "hello"}

@app.get("/hello/{name}")
def say_hello_name(name: str):
    return {"message": f"hello from Vedant: Welcome {name}"}

@app.get("/add/{a}/{b}")
def add_numbers(a: int, b: int):
    return {"result": a + b}
