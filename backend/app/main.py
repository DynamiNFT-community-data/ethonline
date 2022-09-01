import uvicorn
from fastapi import FastAPI
# import pandas as pd

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

def start():
    """Launched with `poetry run start` at root level"""
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)