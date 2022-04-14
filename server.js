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
  name: "testmini",
  code: `$jsEval[const { TicTacToe } = require('leaf-utils');

await TicTacToe({
            message: message,
            slash_command: false,
            time: 300000,
            opponent: message.mentions.users.first(),
            embed: {
                title: 'Tic Tac Toe',
                color: 'RED'
            },
            challenge: {
                acceptButton: 'Accept',
                denyButton: 'Deny',
            },
            emojis: {
                xEmoji: '❌',
                oEmoji: '🔵',
            },
            colors: {
                xEmoji: 'DANGER',
                oEmoji: 'PRIMARY',
            },
            noUser: 'You must mention someone',
            acceptMessage: '{{player}} has challenged you {{opponent}}',
            cancelMessage: '{{opponent}} refused to have a fight with you!',
            endMessage: 'Challenge not accepted in time',
            authorOnly: 'You can\'t use these buttons',
        })]`
  

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