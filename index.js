const {token, prefix} = require('./config.json')
const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    else if (message.channel.name != "bot-test") return;

    const command = message.content.slice(prefix.length).trim().split(/ +/)[0];
    const args = message.content.slice(command.length + prefix.length).trim().split(",");

    console.log(message.author.username);

    if (command === 'args-info') {
        if (!args.length) {
            return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
        }
    
        message.channel.send(`Command name: ${command}\nArguments: ${args}`);
    }

});

client.login(token);