module.exports = {
  name: "del-task",
  description: "Delete a task from your daily tasks",
  async execute(message, args) {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    const { file } = await fetch(
      "https://aws.random.cat/meow"
    ).then((response) => response.json());

    const exampleEmbed = {
      title: "Task/s Deleted",
      color: "#0099ff",
      author: "Do It Bot",
      timestamp: Date.now(),
      fields: [],
      footer: {
        text: "With love from Toronto",
      },
    };

    exampleEmbed.fields.push({
      name: `Task Deleted!`,
      value: args[0],
    });

    message.channel.send({ embed: exampleEmbed });
  },
};
