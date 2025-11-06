# 🚀 How to Run Your Discord AI Bot

## Simple Steps

### Step 1: Open a Terminal
- Press `Win + X` and select "Terminal" or "PowerShell"
- Or right-click in this folder and select "Open in Terminal"

### Step 2: Run the Bot
Type this command and press Enter:

```bash
npm start
```

**That's it!** The bot will start and connect to Discord.

---

## What You Should See

When the bot starts successfully, you'll see:

```
=== Configuration Check ===
Discord Token: Loaded ✅
Gemini API Key: Loaded ✅
Channel ID: Loaded ✅ (Restricted)
===========================
✅ Logged in as YourBotName#1234
🤖 Bot is ready to chat!
```

---

## To Stop the Bot

Press `Ctrl + C` in the terminal where the bot is running.

---

## Test Your Bot

1. Go to your Discord server
2. Navigate to channel ID: **1365657652721618968**
3. Type a message
4. The bot will respond!

---

## Troubleshooting

**Bot won't start?**
- Make sure you're in the correct folder: `D:\codes\discord ai bot`
- Run `npm install` first if you haven't already

**Bot connects but doesn't respond?**
- Make sure you're in the correct channel (1365657652721618968)
- Verify "Message Content Intent" is enabled in Discord Developer Portal
- Check the console for any error messages

**Need more help?**
- Check `QUICK_START.md` for detailed setup
- Check `README.md` for full documentation

---

## Alternative: Run with Node Directly

If `npm start` doesn't work, you can also run:

```bash
node index.js
```

Both commands do the same thing! 🎉



