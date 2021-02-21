module.exports = {
  name: "view-task",
  description: "View all your tasks!",
  async execute(message, args) {
    const fetch = require("node-fetch");
    const Discord = require("discord.js");
    const { file } = await fetch(
      "https://aws.random.cat/meow"
    ).then((response) => response.json());

    task_list = {
      userID: 910230123,
      tasks: [
        {
          name: "Do the dishes",
          done: false,
        },
        {
          name: "Watch netflix",
          done: true,
        },
        {
          name: "Start economics project",
          done: false,
        },
      ],
    };

    //Return a JSON containing all tasks.

    const exampleEmbed = {
      title: "All Tasks",
      color: "#0099ff",
      author: "Do It Bot",
      timestamp: Date.now(),
      fields: [],
      footer: {
        text: "With love from Toronto",
      },
    };

    for (var i of Array(task_list.tasks.length).keys()) {
      var curEl = task_list.tasks[i];
      if (!curEl.done) {
        exampleEmbed.fields.push({
          name: `Task ${i}`,
          value: curEl.name,
        });
      }
    }

    message.channel.send({ embed: exampleEmbed });
  },
};
