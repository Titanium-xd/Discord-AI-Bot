# 🛡️ Moderation Commands Guide

Your Discord AI Bot now has powerful moderation features! All commands are slash commands.

## 📋 Available Commands

### 1. `/ban` - Ban a User by ID

**Usage:**
```
/ban userid:1234567890123456789 reason:Spamming
```

**Parameters:**
- `userid` (required): The Discord user ID to ban
- `reason` (optional): Reason for the ban

**Permissions:** Requires "Ban Members" permission

**Example:**
```
/ban userid:1234567890123456789 reason:Harassment and spamming
```

---

### 2. `/unban` - Unban a User by ID

**Usage:**
```
/unban userid:1234567890123456789
```

**Parameters:**
- `userid` (required): The Discord user ID to unban

**Permissions:** Requires "Ban Members" permission

**Example:**
```
/unban userid:1234567890123456789
```

---

### 3. `/mute` - Mute a Member

**Usage:**
```
/mute user:@Username duration:30 reason:Being disruptive
```

**Parameters:**
- `user` (required): The member to mute (mention or username)
- `duration` (optional): Duration in minutes (0 or omit for permanent)
- `reason` (optional): Reason for the mute

**Permissions:** Requires "Timeout Members" permission

**Examples:**
- Permanent mute: `/mute user:@Spammer reason:Repeated violations`
- Temporary mute: `/mute user:@User duration:60 reason:Temporary timeout`

---

### 4. `/unmute` - Unmute a Member

**Usage:**
```
/unmute user:@Username
```

**Parameters:**
- `user` (required): The member to unmute (mention or username)

**Permissions:** Requires "Timeout Members" permission

**Example:**
```
/unmute user:@Username
```

---

### 5. `/serverinfo` - Server Information

**Usage:**
```
/serverinfo
```

**Parameters:** None

**Permissions:** None (everyone can use)

**Shows:**
- Server ID
- Server Owner
- Creation Date
- Member Count
- Channel Count
- Role Count
- Boost Level
- Boost Count
- Preferred Locale

---

## 🔐 Permission Requirements

To use moderation commands, the bot needs these permissions:

### Bot Permissions Required:
- ✅ **Ban Members** - For `/ban` and `/unban`
- ✅ **Timeout Members** - For `/mute` and `/unmute`
- ✅ **View Channels** - To see messages
- ✅ **Send Messages** - To respond to commands
- ✅ **Use Slash Commands** - To execute commands
- ✅ **Read Message History** - For AI chat

### User Permissions Required:
- To use `/ban` or `/unban`: You need the **Ban Members** role
- To use `/mute` or `/unmute`: You need the **Timeout Members** role
- To use `/serverinfo`: **No special permissions** (everyone can use)

---

## 🚀 How to Use Slash Commands

1. **Open Discord** in your server
2. Type `/` in any channel
3. Start typing the command name (e.g., `/ban`)
4. Select the command from the autocomplete
5. Fill in the required parameters
6. Press Enter or click "Run"

---

## ⚙️ Setting Up Bot Permissions

### Method 1: Discord Developer Portal

1. Go to https://discord.com/developers/applications
2. Select your bot application
3. Go to "Bot" → "Privileged Gateway Intents"
4. Enable **Message Content Intent** ✅

### Method 2: Server Settings

1. Right-click your server
2. Go to **Server Settings** → **Integrations**
3. Find your bot and click **Manage**
4. Under **Permissions**, enable:
   - ✅ Ban Members
   - ✅ Timeout Members
   - ✅ View Channels
   - ✅ Send Messages
   - ✅ Use Slash Commands
   - ✅ Read Message History

### Method 3: Re-invite Bot

1. Go to Discord Developer Portal
2. **OAuth2** → **URL Generator**
3. Select:
   - ✅ `bot`
   - ✅ `applications.commands`
4. Select permissions:
   - ✅ Ban Members
   - ✅ Timeout Members
   - ✅ View Channels
   - ✅ Send Messages
   - ✅ Read Message History
5. Copy URL and open to invite bot

---

## 🔧 Troubleshooting

### Commands Don't Show Up?
- Wait 1-5 minutes for commands to register
- Restart the bot
- Check console for errors

### "Missing Permissions" Error?
- Make sure bot has required permissions
- Check bot's role hierarchy is high enough
- Verify you have the required role

### "User Not Found" Error?
- Make sure the user ID is correct (17-19 digits)
- User might not be in the server (for mute/unmute)
- For ban/unban, ID is used even if user left

### Bot Won't Respond?
- Check bot is online
- Verify message content intent is enabled
- Look at console for error messages

---

## 📝 Important Notes

### Ban Commands
- Work with **user IDs only** (not mentions)
- Can ban users even if they've left the server
- Requires exact 17-19 digit Discord ID

### Mute Commands
- Work with **mentions or usernames**
- Require user to be in the server
- Uses Discord's timeout feature

### Safety Features
- All moderation actions are logged
- Permission checks prevent abuse
- Role hierarchy protection
- Ephemeral responses (only you see them)

---

## 🎉 Your Bot is Ready!

Restart your bot to load the new commands:

```bash
npm start
```

Or double-click: `RUN_BOT.bat`

Commands will be available in 1-5 minutes after bot starts!

---

**Need help? Check the console logs or see error messages when running commands!**



