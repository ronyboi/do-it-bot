module.exports = {
  name: "fin-task",
  description: "Finish a task that you may have added before",
  async execute(message, args) {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    const { file } = await fetch(
      "https://aws.random.cat/meow"
    ).then((response) => response.json());

    const exampleEmbed = {
      title: "Task/s Finished",
      color: "#0099ff",
      author: "Do It Bot",
      timestamp: Date.now(),
      fields: [],
      footer: {
        text: "With love from Toronto",
      },
    };

    exampleEmbed.fields.push({
      name: "Task Finished!",
      value: args[0],
    });

    message.channel.send({ embed: exampleEmbed });
  },
};
