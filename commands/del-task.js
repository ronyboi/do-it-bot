module.exports = {
	name: 'del-task',
	description: 'Delete a task from your daily tasks',
	execute(message, args) {
        const Discord = require("discord.js");
        const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Delete Task')
        .setAuthor('Do It Bot', 'https://i.imgur.com/wSTFkRM.png')
        .setDescription('Some description here')
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addFields(
            { name: 'Regular field title', value: 'Some value here' },
            { name: '\u200B', value: '\u200B' },
            { name: 'Inline field title', value: 'Some value here', inline: true },
            { name: 'Inline field title', value: 'Some value here', inline: true },
        )
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
        message.channel.send(exampleEmbed);

	    message.channel.send(`HERE IS WHERE I DELETE YOUR TASK TO OUR DB BY USING OUR API`);
        message.channel.send(`*The following task:* ${args} *was deleted*.`);
	},
};