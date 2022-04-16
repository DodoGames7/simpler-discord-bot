const simple = require("easier-discord.js");

const bot = new simple.Bot({
  intents: ["GUILDS", "GUILD_MESSAGES","DIRECT_MESSAGES"], //discord intents
  prefix: "s!", // your bot prefix
});

bot.onMessage(); // callbacks that can trigger command when message is send

bot.command({
  name: "rickroll",
  code: `$send[$channelId[];https://www.youtube.com/watch?v=dQw4w9WgXcQ]`
})

bot.command({
  name: "help",
  code: `$send[$channelId[];{createEmbed:{title:Help Commands}{field:Fun:rickroll, say, token, cat-facts, howgay}{field:Other:source, stats, ping}{footer:made by dodoGames with simpler discord Package}}]`
})

bot.command({
  name: "source",
  code: `$send[$channelId[];here is my source code: https://github.com/DodoGames7/simpler-discord-bot]`
})



bot.command({
  name: "token",
  code: `$send[$channelId[];{createEmbed:{title:HERE IS MY TOKEN!!?!?!}{description:$httpRequest[https://some-random-api.ml/bottoken]}}]`
}) 


bot.command({
  name: "say",
  code: `$send[$channelId[];$message[]]`
})
// makes the bot say whatever you want

bot.command({
  name: "cat-facts",
  code: `$send[$channelId[];$httpRequest[https://some-random-api.ml/facts/cat]]
  `
}) // returns random facts about cats from some random api site

bot.command({
  name: "howgay",
  code: `$send[$channelId[];{createEmbed:{title:HowGay Machine}{description:$username[$mentioned[1]] is $randomNumber[0;100]% Gay 🏳‍🌈}}]`
})
// rates how gay the user is

bot.command({
  name: "av",
  code: `$send[$channelID[];{createEmbed:{image:$authorAvatar[$mentioned[1]]}}]`
})

bot.command({
  name: "stats",
  code: `$send[$channelId[];{createEmbed:{title:Sans Drip stats}{field:simpler-discord:0.0.1-dev:no}{field:ram:$ram[]:no}{field:Ping:$ping[]ms:no}{field:Uptime:$uptime[]:no}}]
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
