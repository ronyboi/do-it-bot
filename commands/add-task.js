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

    newEntry = {
      userID: message.author.id,
      task_list: [],
      date: new Date(),
    };

    var count = 0;
    for (const task of args) {
      var updateTask = task.trim().split(":")[1];
      var category = task.trim().split(":")[0].toLowerCase();
      tempObj = {
        category: category,
        name: updateTask,
        done: false,
      };
      newEntry.task_list.push(tempObj);
      console.log(task);
      exampleEmbed.fields.push({
        name: `Task ${count}`,
        value: updateTask,
      });
      count++;
    }

    fetch("http://34.121.167.55/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(newEntry),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json));

    console.log(JSON.stringify(newEntry));

    message.channel.send({ embed: exampleEmbed });
  },
};
