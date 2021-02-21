module.exports = {
	name: 'add-task',
	description: 'Add a task to your daily tasks',
	async execute(message, args) {
        const fetch = require('node-fetch');
        const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());
        message.channel.send(file);
		// message.channel.send(`HERE IS WHERE I ADD YOUR TASK TO OUR DB BY USING OUR API`);
        // message.channel.send(`The following task: ${args} was added.`);
	},
};