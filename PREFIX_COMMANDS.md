# 🛡️ Prefix Commands Guide

Your Discord AI Bot now uses **prefix commands** with the `*` prefix!

## 📋 Available Commands

All commands start with `*`

---

### 1. `*ban` - Ban a User by ID

**Usage:**
```
*ban <userid> [reason]
```

**Parameters:**
- `userid` (required): The Discord user ID to ban (17-19 digits)
- `reason` (optional): Reason for the ban

**Permissions:** Requires "Ban Members" permission

**Examples:**
```
*ban 1234567890123456789
*ban 1234567890123456789 Spamming in channels
*ban 1234567890123456789 Harassment and inappropriate behavior
```

---

### 2. `*unban` - Unban a User by ID

**Usage:**
```
*unban <userid>
```

**Parameters:**
- `userid` (required): The Discord user ID to unban

**Permissions:** Requires "Ban Members" permission

**Example:**
```
*unban 1234567890123456789
```

---

### 3. `*mute` - Mute a Member

**Usage:**
```
*mute <@user> [duration] [reason]
```

**Parameters:**
- `@user` (required): The member to mute (must @mention them)
- `duration` (optional): Duration in minutes (omit for permanent)
- `reason` (optional): Reason for the mute

**Permissions:** Requires "Timeout Members" permission

**Examples:**
```
*mute @Username
*mute @Username 30
*mute @Username 60 Being disruptive
*mute @Spammer 0 Repeated violations
```

**Notes:**
- Duration is in **minutes**
- Leave duration empty or use 0 for **permanent mute**
- You must use `@` to mention the user

---

### 4. `*unmute` - Unmute a Member

**Usage:**
```
*unmute <@user>
```

**Parameters:**
- `@user` (required): The member to unmute (must @mention them)

**Permissions:** Requires "Timeout Members" permission

**Example:**
```
*unmute @Username
```

---

### 5. `*serverinfo` - Server Information

**Usage:**
```
*serverinfo
```

or

```
*server
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

### 6. `*help` - Get Help

**Usage:**
```
*help
```

**Parameters:** None

**Permissions:** None (everyone can use)

Shows a list of all available commands with descriptions.

---

## 🔐 Permission Requirements

To use moderation commands, you need the appropriate role:

| Command | Required Permission |
|---------|---------------------|
| `*ban` | Ban Members |
| `*unban` | Ban Members |
| `*mute` | Timeout Members |
| `*unmute` | Timeout Members |
| `*serverinfo` | None (everyone) |
| `*help` | None (everyone) |

**Bot Permissions Needed:**
- Ban Members
- Timeout Members
- View Channels
- Send Messages
- Read Message History

---

## 💬 AI Chat

**The AI chat still works exactly the same!**

Just type any message **without** the `*` prefix, and the bot will respond using Gemini AI.

**Example:**
```
You: What's the weather like?
Bot: I don't have access to real-time weather data, but I can help you find weather information...
```

---

## 🚀 Quick Examples

```bash
# Check server info
*serverinfo

# Ban a user
*ban 1234567890123456789 Spamming

# Unban a user
*unban 1234567890123456789

# Mute someone for 30 minutes
*mute @Username 30 Being disruptive

# Permanently mute someone
*mute @Username

# Unmute someone
*unmute @Username

# Get help
*help

# Chat with AI (no prefix!)
What's the capital of France?
```

---

## ⚠️ Important Notes

### Ban Commands (*ban, *unban)
- Use **user IDs only** (17-19 digit numbers)
- Can ban even if user left the server
- Get user ID: Right-click user → Copy ID (Dev Mode must be enabled)

### Mute Commands (*mute, *unmute)
- Must use **@mentions** (click @ to mention the user)
- User must be **in the server**
- Duration is in **minutes**

### Safety Features
✅ Permission checks  
✅ Role hierarchy protection  
✅ Error handling  
✅ Clear error messages  

---

## 🐛 Troubleshooting

**"You don't have permission"**
→ You need the appropriate role (Ban Members or Timeout Members)

**"Invalid user ID format"**
→ User IDs are 17-19 digits. Enable Developer Mode to copy IDs.

**"User not found in this server"**
→ For mute/unmute, you must @mention a user who is currently in the server

**"I don't have permission"**
→ Bot needs Ban/Timeout permissions. Check Server Settings → Integrations

**AI chat stopped working?**
→ Make sure you're typing messages **without** the `*` prefix in the correct channel

---

## 📝 Summary

- **Prefix:** `*`
- **Commands:** All start with `*`
- **AI Chat:** Any message without `*`
- **Permissions:** Required for moderation commands
- **Help:** Type `*help` for a list

---

**Your bot is ready! Just restart it to use the new prefix commands! 🎉**



