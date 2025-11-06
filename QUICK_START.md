# 🚀 Quick Start Guide

## ✅ What's Already Done

- ✅ Bot code configured with Gemini AI
- ✅ Gemini API key added to `.env`
- ✅ All dependencies installed
- ✅ Code syntax verified

## 📋 What You Need to Do

### 1. Get Your Discord Bot Token

**Follow these steps:**

1. Go to https://discord.com/developers/applications
2. Click **"New Application"** (or select existing)
3. Click **"Bot"** on the left menu
4. Click **"Reset Token"** or **"Copy"** to get your token
5. **IMPORTANT:** Scroll down and enable **"Message Content Intent"** under Privileged Gateway Intents
6. Click **"OAuth2"** in the left menu, then **"URL Generator"**
7. Select these scopes:
   - ✅ `bot`
   - ✅ `applications.commands`
8. Select these permissions:
   - ✅ `Send Messages`
   - ✅ `Read Message History`
9. Copy the generated URL at the bottom
10. Open the URL in your browser to invite the bot to your server

### 2. Add Your Token to .env

Open the `.env` file in this folder and replace `YOUR_DISCORD_BOT_TOKEN_HERE` with your actual token:

```
DISCORD_TOKEN=YOUR_ACTUAL_TOKEN_HERE
GEMINI_API_KEY=AIzaSyCITfNm8ESWxNiMOuid9Hi6NvvqmGyZ1f4
```

### 3. Run the Bot

In PowerShell or Command Prompt, run:

```bash
npm start
```

Or:

```bash
node index.js
```

### 4. Test the Bot

Go to your Discord server and send a message. The bot should respond!

## 🎯 Troubleshooting

**Bot not responding?**
- Double-check your Discord token is correct
- Make sure "Message Content Intent" is enabled in Discord Developer Portal
- Verify the bot has permission to read/send messages in the channel

**Getting errors?**
- Check the console for error messages
- Make sure all dependencies are installed: `npm install`
- Verify your Gemini API key is valid

## 📝 Optional: Restrict to One Channel

If you want the bot to only respond in a specific channel:

1. In Discord, right-click the channel
2. Select "Copy ID"
3. Add it to your `.env` file:

```
CHANNEL_ID=1234567890123456789
```

---

**That's it! Your bot should now be working! 🤖✨**



