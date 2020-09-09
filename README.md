# DiscordBot

Yet another DiscordJS bot using the Commando Framework.

## How to use

###### For Development
1. Create a ```.env``` file in your project root.
   ```
   DISCORD_TOKEN=<YOUR DISCORD BOT TOKEN>
   MONGO_URI=<YOUR MONGO URI>
   OWNER=<YOUR DISCORD ID>
   PREFIX=!
   ```
2. Run
   ```bash
   npm run dev
   ```

## Deploy for yourself

### Creating your bot
1. [Open the following link](https://discordapp.com/developers/applications/) to Discord's developer portal.
2. Create a new Application.
3. Give your application a name and image.
![Discord](/docs/img/discord01.png)
4. Under the Bot tab, click 'Add Bot'.
![Discord](/docs/img/discord02.png)
5. Copy your Client ID and Secret to another location.
6. Invite your bot to a server using the following link: https://discordapp.com/oauth2/authorize?&client_id=YOUR_CLIENT_ID_HERE&scope=bot
*Replace YOUR_CLIENT_ID_HERE with your Client ID*

### Creating the GitHub Repository
1. Fork this repository
2. Clone this to your local machine
    ```bash
    git clone git@github.com:YOUR_GITHUB_NAME/discordbot.git
    ```
3. Make any changes you might like.

### Hosting on Heroku
1. Go to the [Heroku Dashboard](https://dashboard.heroku.com/apps)
2. Go to the deploy section, select GitHub, and enable Automatic Deploy
![Heroku](/docs/img/heroku01.png)
3. Under Resources, deselect web and activate the worker
![Heroku](/docs/img/heroku02.png)
4. Go to Settings, find the Config Variables section, and add a new option. The Variable’s key should be DISCORD_BOT_TOKEN and the value should be the Client Secret you copied earlier.

### Hosting on in a Docker Container
1. Create a ```.env``` file in your project root.
   ```
   DISCORD_TOKEN=<YOUR DISCORD BOT TOKEN>
   MONGO_URI=<YOUR MONGO URI>
   OWNER=<YOUR DISCORD ID>
   PREFIX=!
   ```
2. Build your image
   ```bash
   docker build -t <TAG> .
   ```

3. Run your docker container
   ```bash
   docker run -d --env-file="./env" <YOU DOCKER IMAGE NAME>
   ```
**Note:** *currently does not work on arm64 systems due to the canvas dependancy not having an arm64 release.*