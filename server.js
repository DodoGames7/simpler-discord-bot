const simple = require("easier-discord.js");

const bot = new simple.Bot({
  intents: ["GUILDS", "GUILD_MESSAGES","DIRECT_MESSAGES"], //discord intents
  prefix: "s!", // your bot prefix
});

bot.onMessage(); // callbacks that can trigger command when message is send

bot.command({
  name: "say",
  code: `$send[$channelId[];$message[]]`
})

bot.command({
  name: "howgay",
  code: `$send[$channelId[];{createEmbed:{title:HowGay Machine}{description:$username[$mentioned[1]] is $randomNumber[0;100]% Gay 🏳‍🌈}}]`
})

bot.command({
  name: "av",
  code: `$send[$channelID[];{createEmbed:{image:$authorAvatar[$mentioned[1]]}}]`
})

bot.command({
  name: "stats",
  code: `$send[$channelId[];{createEmbed:{title:Sans Drip stats}{field:simpler-discord:0.0.1-dev:no}{field:ram:$ram[]:no}{field:Ping:$ping[]ms:no}}]
  `
})

bot.command({
    name: "eval",
    code: `$send[$channelId[];$functionEval[$message[]]]`
})

bot.command({
  name: "ping", //ping command
  code: `$send[$channelID[];Pong: $ping[]ms]`, //will return ping
});

bot.login(process.env.TOKEN); // your bot token