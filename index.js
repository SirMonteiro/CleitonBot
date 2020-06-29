const express = require("express");
const app = express();
app.get("/", (request, response) => {
  console.log(Date() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const { Client } = require("discord.js");
const client = new Client();
const Enmap = require("enmap");
const fs = require("fs");
const { connect } = require('mongoose')

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});

(async () => {
  await connect(process.env.MONGODB_URI, {
    user: process.env.MONGODB_USER,
    pass: process.env.MONGODB_PASS,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }, (err) => {
    if (err) {
      console.log('Error on Database, Killing bot...');
      setTimeout(() => {
        process.exit();
      }, 10)
    }
  })
  return client.login(process.env.TOKEN);
})();