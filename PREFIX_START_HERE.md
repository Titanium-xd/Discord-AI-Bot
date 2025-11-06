# 🚀 PREFIX COMMANDS - START HERE

## ✅ What Changed

Your bot now uses **`*` prefix commands** instead of slash commands!

- ✅ All commands start with `*`
- ✅ AI chat still works the same
- ✅ No more slash commands

---

## 🔴 RESTART YOUR BOT NOW

**IMPORTANT:** You MUST restart the bot to load the new prefix commands!

### How to Restart:

1. **Stop the bot** (if running):
   - Press `Ctrl + C` in terminal

2. **Start it again:**
   ```bash
   npm start
   ```
   Or double-click: `RUN_BOT.bat`

You'll see:
```
✅ Logged in as YourBotName#1234
🤖 Bot is ready to chat!
⚙️  Prefix commands enabled with prefix: *
💬 AI chat enabled with Gemini
```

---

## 🧪 Test It Right Now

Open Discord and try:

### 1. Get Help:
```
*help
```

### 2. Check Server Info:
```
*serverinfo
```

### 3. Chat with AI (no prefix):
```
What's 2+2?
```

---

## 📋 All Commands

**Prefix:** `*` (asterisk)

| Command | What It Does |
|---------|--------------|
| `*ban <userid> [reason]` | Ban a user by ID |
| `*unban <userid>` | Unban a user by ID |
| `*mute <@user> [duration] [reason]` | Mute a member |
| `*unmute <@user>` | Unmute a member |
| `*serverinfo` | Show server info |
| `*help` | Show all commands |

**AI Chat:** Just type anything **without** the `*` prefix!

---

## 🎯 Quick Examples

```
# Ban a user
*ban 1234567890123456789 Spamming

# Unban a user
*unban 1234567890123456789

# Mute someone for 30 minutes
*mute @Username 30 Being disruptive

# Permanently mute
*mute @Username

# Unmute someone
*unmute @Username

# Server info
*serverinfo

# Get help
*help

# Chat with AI (no prefix!)
Hello bot, how are you?
```

---

## 🔐 Set Up Permissions

For commands to work, the bot needs:

1. Go to **Server Settings** → **Integrations** → Your Bot
2. Enable these permissions:
   - ✅ Ban Members
   - ✅ Timeout Members
   - ✅ View Channels
   - ✅ Send Messages

---

## ⚠️ Important Notes

### Get User IDs
Enable Developer Mode in Discord:
1. Settings → Advanced → Developer Mode ✅
2. Right-click user → Copy ID

### Mute Commands
- Must use `@` to mention the user
- Duration is in **minutes**
- Leave duration empty for permanent

### AI Chat
- Works exactly the same!
- Just don't use `*` prefix
- Type normal messages

---

## 🐛 Troubleshooting

**Commands don't work?**
→ Make sure you're using the `*` prefix (not `/`)

**"No permission" error?**
→ You need the appropriate role or bot needs permissions

**AI chat stopped?**
→ Don't use `*` prefix for AI chat. Just type normally.

**Bot not responding?**
→ Check console for errors
→ Make sure Message Content Intent is enabled

---

## 📚 More Info

- **Full Guide:** See `PREFIX_COMMANDS.md`
- **Quick Reference:** See examples above

---

## 🎉 That's It!

Your bot now uses prefix commands with `*`!

**Just restart the bot and try `*help` in Discord!** 🚀

---

## 💡 How It Works

```
*help          → Shows command list
*ban 123...    → Bans a user
*mute @User 30 → Mutes for 30 minutes
Hello bot!     → AI responds (no prefix!)
```

**Simple!** Commands = `*` prefix, AI chat = no prefix!



