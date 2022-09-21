import uvicorn
from fastapi import FastAPI
import asyncio
# import pandas as pd
from app.discord_bot import MyClient
DISCORD_TOKEN="MTAxNDcyMjc2MTQxMjg0MTUyMg.GQhDUH.QGtZkr7xHu0z48sukgmYplsMZ3c13CG8g1zEqs"

app = FastAPI()

@app.on_event("startup")
async def startup_event(): #this fucntion will run before the main API starts
    print('on startup')
    client = MyClient()
    # client.run(DISCORD_TOKEN)
    asyncio.create_task(client.start(DISCORD_TOKEN))
    await asyncio.sleep(4) #optional sleep for established connection with discord
    print(f"{client.user} has connected to Discord!")

@app.get("/")
async def root():
    return {"message": "Hello World"}

def start():
    """Launched with `poetry run start` at root level"""
    uvicorn.run("app.main:app", host="0.0.0.0", port=8201, reload=True)