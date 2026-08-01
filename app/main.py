from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Stock Comparator API is running!"}