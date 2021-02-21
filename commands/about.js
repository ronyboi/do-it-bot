module.exports = {
	name: 'about',
	description: 'About us, basic stuff - idk what else to say',
	async execute(message, args) {
        const fetch = require('node-fetch');
        const Discord = require("discord.js");
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

        const exampleEmbed = {
            title: "About Us",
            color: "#0099ff",
            author: "Do It Bot",
            timestamp: Date.now(),
            description:    'Rohan, Vaibhav and Sannat are a team of college students who made this bot for UofTHacks.\
                            Keeping in mind the Telus challenge, we decided to create a bot that would enable students to hold themselves accountable\
                            by tabulating their work throughout the week.',
            footer: {
                text: "With love from Toronto"
            }
        };

        message.channel.send({embed: exampleEmbed});
	},
};