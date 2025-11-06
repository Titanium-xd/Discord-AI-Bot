import 'dotenv/config';
import { Client, GatewayIntentBits, Events, PermissionFlagsBits, EmbedBuilder } from 'discord.js';
import { GoogleGenerativeAI } from '@google/generative-ai';

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.GuildMessages, 
    GatewayIntentBits.MessageContent
  ]
});

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

// Command prefix
const PREFIX = '*';

// Command handler functions
async function handleBan(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
    return await message.reply('❌ You don\'t have permission to ban members!');
  }

  const userId = args[0];
  const reason = args.slice(1).join(' ') || 'No reason provided';

  if (!userId) {
    return await message.reply('❌ Usage: `*ban <userid> [reason]`');
  }

  if (!/^\d{17,19}$/.test(userId)) {
    return await message.reply('❌ Invalid user ID format! User IDs are 17-19 digits.');
  }

  try {
    await message.guild.members.ban(userId, { reason });
    await message.reply(`✅ Successfully banned user <@${userId}> (${userId})\n📝 Reason: ${reason}`);
  } catch (error) {
    if (error.code === 50035) {
      await message.reply('❌ Unable to ban this user. They might not be in the server.');
    } else if (error.code === 50013) {
      await message.reply('❌ I don\'t have permission to ban this user!');
    } else {
      await message.reply(`❌ Error: ${error.message}`);
    }
  }
}

async function handleUnban(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.BanMembers)) {
    return await message.reply('❌ You don\'t have permission to unban members!');
  }

  const userId = args[0];

  if (!userId) {
    return await message.reply('❌ Usage: `*unban <userid>`');
  }

  if (!/^\d{17,19}$/.test(userId)) {
    return await message.reply('❌ Invalid user ID format! User IDs are 17-19 digits.');
  }

  try {
    await message.guild.members.unban(userId);
    await message.reply(`✅ Successfully unbanned user <@${userId}> (${userId})`);
  } catch (error) {
    if (error.code === 10026) {
      await message.reply('❌ User is not banned!');
    } else if (error.code === 50013) {
      await message.reply('❌ I don\'t have permission to unban this user!');
    } else {
      await message.reply(`❌ Error: ${error.message}`);
    }
  }
}

async function handleMute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
    return await message.reply('❌ You don\'t have permission to mute members!');
  }

  const userMention = args[0];
  const duration = parseInt(args[1]) || null;
  const reason = args.slice(2).join(' ') || (args.length > 1 && isNaN(args[1]) ? args.slice(1).join(' ') : 'No reason provided');

  if (!userMention) {
    return await message.reply('❌ Usage: `*mute <@user> [duration in minutes] [reason]`\nExample: `*mute @Username 30 Being disruptive`');
  }

  // Extract user ID from mention
  const userId = userMention.replace(/[<@!>]/g, '');
  const member = await message.guild.members.fetch(userId).catch(() => null);

  if (!member) {
    return await message.reply('❌ User not found in this server!');
  }

  if (member.id === message.author.id) {
    return await message.reply('❌ You cannot mute yourself!');
  }

  if (member.roles.highest.position >= message.member.roles.highest.position && message.author.id !== message.guild.ownerId) {
    return await message.reply('❌ You cannot mute this user!');
  }

  try {
    if (duration && duration > 0) {
      await member.timeout(duration * 60 * 1000, reason);
      await message.reply(`✅ Successfully muted ${member.user.tag} for ${duration} minutes\n📝 Reason: ${reason}`);
    } else {
      await member.timeout(null, reason); // Permanent mute
      await message.reply(`✅ Successfully muted ${member.user.tag} permanently\n📝 Reason: ${reason}`);
    }
  } catch (error) {
    await message.reply(`❌ Error: ${error.message}`);
  }
}

async function handleUnmute(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.ModerateMembers)) {
    return await message.reply('❌ You don\'t have permission to unmute members!');
  }

  const userMention = args[0];

  if (!userMention) {
    return await message.reply('❌ Usage: `*unmute <@user>`');
  }

  // Extract user ID from mention
  const userId = userMention.replace(/[<@!>]/g, '');
  const member = await message.guild.members.fetch(userId).catch(() => null);

  if (!member) {
    return await message.reply('❌ User not found in this server!');
  }

  try {
    await member.timeout(null);
    await message.reply(`✅ Successfully unmuted ${member.user.tag}`);
  } catch (error) {
    await message.reply(`❌ Error: ${error.message}`);
  }
}

async function handleServerInfo(message) {
  const guild = message.guild;
  const owner = await guild.fetchOwner();

  const embed = new EmbedBuilder()
    .setColor(0x5865F2)
    .setTitle(`${guild.name} - Server Information`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .addFields(
      { name: '🆔 Server ID', value: guild.id, inline: true },
      { name: '👑 Owner', value: `<@${owner.id}>`, inline: true },
      { name: '📅 Created', value: `<t:${Math.floor(guild.createdTimestamp / 1000)}:R>`, inline: true },
      { name: '👥 Members', value: guild.memberCount.toString(), inline: true },
      { name: '💬 Channels', value: guild.channels.cache.size.toString(), inline: true },
      { name: '🎭 Roles', value: guild.roles.cache.size.toString(), inline: true },
      { name: '📊 Boost Level', value: guild.premiumTier.toString(), inline: true },
      { name: '✨ Boosts', value: guild.premiumSubscriptionCount?.toString() || '0', inline: true },
      { name: '🌍 Region', value: guild.preferredLocale, inline: true }
    )
    .setFooter({ text: `Requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL() })
    .setTimestamp();

  await message.reply({ embeds: [embed] });
}

async function handlePurge(message, args) {
  if (!message.member.permissions.has(PermissionFlagsBits.ManageMessages)) {
    return await message.reply('❌ You don\'t have permission to manage messages!');
  }

  if (!message.guild.members.me.permissions.has(PermissionFlagsBits.ManageMessages)) {
    return await message.reply('❌ I don\'t have permission to delete messages!');
  }

  const amount = parseInt(args[0]);

  if (!amount || isNaN(amount)) {
    return await message.reply('❌ Usage: `*purge <number>`\nExample: `*purge 5` (deletes last 5 messages)');
  }

  if (amount < 1 || amount > 100) {
    return await message.reply('❌ Please specify a number between 1 and 100!');
  }

  try {
    // Fetch messages including the command message itself
    const messages = await message.channel.messages.fetch({ limit: amount + 1 });
    
    // Filter to only delete messages that are less than 14 days old (Discord limitation)
    const messagesToDelete = messages.filter(msg => {
      const msgAge = Date.now() - msg.createdTimestamp;
      return msgAge < 14 * 24 * 60 * 60 * 1000; // 14 days in milliseconds
    });

    if (messagesToDelete.size === 0) {
      return await message.reply('❌ No messages found to delete, or all messages are older than 14 days (Discord limitation).');
    }

    // Delete messages
    if (messagesToDelete.size === 1) {
      await messagesToDelete.first().delete();
    } else {
      await message.channel.bulkDelete(messagesToDelete);
    }

    // Send confirmation (will auto-delete after 3 seconds)
    const confirmation = await message.reply(`✅ Successfully deleted ${messagesToDelete.size} message(s)!`);
    
    // Delete confirmation after 3 seconds
    setTimeout(() => {
      confirmation.delete().catch(() => {});
    }, 3000);

  } catch (error) {
    console.error('Error purging messages:', error);
    if (error.code === 50034) {
      await message.reply('❌ Cannot delete messages older than 14 days!');
    } else {
      await message.reply(`❌ Error: ${error.message}`);
    }
  }
}

async function handleHelp(message) {
  const embed = new EmbedBuilder()
    .setColor(0x5865F2)
    .setTitle('🛡️ Moderation Commands')
    .setDescription('Commands use the **`*`** prefix')
    .addFields(
      { name: '🔨 Ban & Unban', value: '`*ban <userid> [reason]` - Ban a user\n`*unban <userid>` - Unban a user', inline: false },
      { name: '🔇 Mute & Unmute', value: '`*mute <@user> [duration] [reason]` - Mute a member\n`*unmute <@user>` - Unmute a member', inline: false },
      { name: '🗑️ Purge', value: '`*purge <number>` - Delete last N messages (1-100)', inline: false },
      { name: 'ℹ️ Info', value: '`*serverinfo` - Show server information\n`*help` - Show this help', inline: false }
    )
    .setFooter({ text: 'Note: Duration is in minutes. Omit for permanent mute. Purge can only delete messages less than 14 days old.' })
    .setTimestamp();

  await message.reply({ embeds: [embed] });
}

client.once('ready', () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
  console.log(`🤖 Bot is ready to chat!`);
  console.log(`⚙️  Prefix commands enabled with prefix: ${PREFIX}`);
  console.log(`💬 AI chat enabled with Gemini`);
});

client.on(Events.MessageCreate, async (message) => {
  // Ignore bot messages
  if (message.author.bot) return;
  
  // Check if message starts with prefix
  if (message.content.startsWith(PREFIX)) {
    // This is a command
    const args = message.content.slice(PREFIX.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    try {
      switch (commandName) {
        case 'ban':
          await handleBan(message, args);
          break;
        case 'unban':
          await handleUnban(message, args);
          break;
        case 'mute':
          await handleMute(message, args);
          break;
        case 'unmute':
          await handleUnmute(message, args);
          break;
        case 'purge':
        case 'clear':
          await handlePurge(message, args);
          break;
        case 'serverinfo':
        case 'server':
          await handleServerInfo(message);
          break;
        case 'help':
          await handleHelp(message);
          break;
        default:
          await message.reply(`❌ Unknown command: \`${commandName}\`. Type \`*help\` for help.`);
      }
    } catch (error) {
      console.error('Error handling command:', error);
      await message.reply('❌ An error occurred while executing this command!');
    }
    return; // Don't process as AI chat
  }

  // This is not a command - process as AI chat if channel matches
  // If CHANNEL_ID is set, only respond in that channel
  // Otherwise, respond to all channels
  if (process.env.CHANNEL_ID && message.channel.id !== process.env.CHANNEL_ID) return;

  try {
    // Show typing indicator
    await message.channel.sendTyping();

    // Get the user's message
    const userMessage = message.content;

    // Generate response using Gemini
    const result = await model.generateContent(userMessage);
    const response = await result.response;
    const reply = response.text();

    if (!reply) {
      throw new Error('No response from AI');
    }

    // Split long messages (Discord limit is 2000 characters)
    const chunks = reply.match(/[\s\S]{1,1900}/g) || [];
    
    for (const chunk of chunks) {
      await message.reply(chunk);
    }

  } catch (err) {
    console.error('Error:', err.message);
    console.error('Full error:', err);
    message.reply("❌ Sorry, something went wrong with the AI response.");
  }
});

// Configuration check
console.log('=== Configuration Check ===');
console.log("Discord Token:", process.env.DISCORD_TOKEN ? "Loaded ✅" : "Missing ❌");
console.log("Gemini API Key:", process.env.GEMINI_API_KEY ? "Loaded ✅" : "Missing ❌");
if (process.env.CHANNEL_ID) {
  console.log("Channel ID:", process.env.CHANNEL_ID ? "Loaded ✅ (Restricted)" : "Missing ❌");
} else {
  console.log("Channel ID: Not set (Bot will respond in all channels)");
}
console.log('===========================');

// Login to Discord
client.login(process.env.DISCORD_TOKEN).catch(err => {
  console.error('Failed to login:', err.message);
  process.exit(1);
});
