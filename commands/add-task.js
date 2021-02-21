module.exports = {
	name: 'add-task',
	description: 'Add a task to your daily tasks',
	execute(message, args) {
		message.channel.send(`HERE IS WHERE I ADD YOUR TASK TO OUR DB BY USING OUR API`);
        message.channel.send(`The following task: ${args} was added.`);
	},
};