from copyreg import constructor
import discord
import pandas as pd
import matplotlib.pyplot as plt
from wordcloud import WordCloud
import io
import base64
# import spacy
# nlp = spacy.load("en_core_web_md")

APP_ID=1014722761412841522
DISCORD_TOKEN="MTAxNDcyMjc2MTQxMjg0MTUyMg.GQhDUH.QGtZkr7xHu0z48sukgmYplsMZ3c13CG8g1zEqs"
GUILD_ID=1015892822311845979 # waterreptile
GUILD_ID=1014474166948343838 # zerion dna

class MyClient(discord.Client):

    def __init__(self):
        intents = discord.Intents.default()
        intents.message_content = True
        application_id = APP_ID
        super().__init__(intents=intents, application_id=application_id)


    async def on_ready(self):
        print(f'Logged on as {self.user}!')
        guild = discord.utils.get(self.guilds, id=GUILD_ID)
        print(
            f'{self.user} is connected to the following guild:\n'
            f'{guild.name}(id: {guild.id})'
        )

        for channel in guild.channels:
            if channel.id == 1014480787036454912: # developments
                print(channel.name)
                # await channel.send('Awesome @Ryo.take#8136. This bot is happy!! I am a happy bot')
                async for message in channel.history(limit=20):
                    print(message.author.id, message.author.name)
                    # if message.author.id == 384911153999904768:
                    if message.id == 1016222558233821225:
                        print(message.id)
                        print(message.content)
                        word_cloud = WordCloud(collocations = False, background_color = 'white').generate(message.content)
                        plt.imshow(word_cloud, interpolation='bilinear')
                        plt.axis("off")
                        my_stringIObytes = io.BytesIO()
                        plt.savefig(my_stringIObytes, format='jpg')
                        my_stringIObytes.seek(0)
                        my_base64_jpgData = base64.b64encode(my_stringIObytes.read())#.decode("utf-8").replace("\n", "")
                        # final = "data:image/png;base64,{}".format(my_base64_jpgData)
                        # file = discord.File(io.BytesIO(my_base64_jpgData))
                        file = discord.File(io.BytesIO(base64.b64decode(my_base64_jpgData)), filename="image.png")

                        e = discord.Embed(title=f"Wordcloud Analysis of {message.author.name}'s message about progress", description="Wordcloud", color=0x00ff00)
                        # e.set_footer(text=f"Analysis of {message.author.mention}'s message about progress")
                        e.set_image(url="attachment://image.png")
                        await message.channel.send(f"Analysis of {message.author.mention}'s message about progress")
                        await channel.send(file=file, embed=e)
                        # await channel.send(embed=e)

                        # await channel.send("content", file=file)
                        # await channel.send(file=discord.File(final))


    # async def on_message(self, message):
    #     print(client.user)
    #     if(message.author != client.user):
    #         print(f'Message from {message.author}: {message.content}')
    #         await message.channel.send('Bot serving up! 🎈🎉')

# intents = discord.Intents.default()
# intents.message_content = True

# client = MyClient(intents=intents, application_id=APP_ID)
# client = MyClient()

# client.run(DISCORD_TOKEN)