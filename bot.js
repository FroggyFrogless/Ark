const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Bot up and Running!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
    if (message.content === 'ark') {
    	message.reply('Survival Evolved');
  	}
    if (message.content === 'ark!help') {
    	message.reply('Work in Progress');
  	}
    if (message.content === 'ark!') {
    	message.reply('Try >ark!help<');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
