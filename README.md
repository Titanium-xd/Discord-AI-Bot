# Discord AI Chatbot

A Discord bot powered by Google's Gemini AI that can chat naturally with users.

## Features

- 🤖 Powered by Google Gemini AI
- 💬 Natural conversation responses
- 📝 Optional channel restrictions
- 🎯 Easy to configure and deploy

## Quick Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# Discord Bot Configuration
DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN_HERE

# Gemini AI Configuration
GEMINI_API_KEY=YOUR_GEMINI_API_KEY_HERE

# Optional: Channel ID to restrict bot to specific channel
# Leave empty to respond in all channels
# CHANNEL_ID=1234567890123456789
```

**Important:** Replace `YOUR_DISCORD_BOT_TOKEN_HERE` with your actual Discord bot token.

### 3. Get Your Discord Bot Token

1. Go to [Discord Developer Portal](https://discord.com/developers/applications)
2. Create a new application or select an existing one
3. Go to the "Bot" section
4. Click "Reset Token" or "Copy" to get your bot token
5. Enable "Message Content Intent" under Privileged Gateway Intents
6. Go to "OAuth2" > "URL Generator"
7. Select scopes: `bot`, `applications.commands`
8. Select bot permissions: `Send Messages`, `Read Message History`
9. Copy the generated URL and open it in your browser to invite the bot to your server

### 4. Run the Bot

```bash
npm start
```

Or:

```bash
node index.js
```

## Usage

Once the bot is running, simply type messages in your Discord server. The bot will respond using Gemini AI.

If you set a `CHANNEL_ID` in your `.env` file, the bot will only respond in that specific channel. If you don't set it, the bot will respond to all channels where it has permission.

## Troubleshooting

### Bot not responding?

- Check that the Discord token is correct in your `.env` file
- Make sure Message Content Intent is enabled in Discord Developer Portal
- Verify the bot has permission to read and send messages in the channel
- Check console logs for error messages

### API errors?

- Verify your Gemini API key is valid
- Check your internet connection
- Look at the console for detailed error messages

## License

ISC




