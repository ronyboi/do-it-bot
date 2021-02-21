module.exports = {
  name: "add-task",
  description: "Add a task to your daily tasks",
  async execute(message, args) {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    const { file } = await fetch(
      "https://aws.random.cat/meow"
    ).then((response) => response.json());

    const exampleEmbed = {
      title: "Task/s Added",
      color: "#0099ff",
      author: "Do It Bot",
      timestamp: Date.now(),
      fields: [],
      footer: {
        text: "With love from Toronto",
      },
    };

    var count = 0;
    for (const task of args) {
      console.log(task);
      exampleEmbed.fields.push({
        name: `Task ${count}`,
        value: task,
      });
      count++;
    }

    message.channel.send({ embed: exampleEmbed });
  },
};
