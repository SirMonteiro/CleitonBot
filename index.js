const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://CleitonBot--sirmonteiro.repl.co/`);
}, 280000);


const { Client, RichEmbed, Attachment } = require('discord.js');
const client = new Client();
const Enmap = require("enmap");
const fs = require("fs");
//const config = require('./config.json');
//client.config = config;

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`carregando ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.TOKEN);