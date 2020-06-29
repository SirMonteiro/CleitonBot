const db = require("../models/db");

exports.run = async (client, message, args) => {
    message.channel.send("...");
    const doc = new db({ _id: message.guild.id })
    await doc.save()
    message.reply('Criou um novo documento!')
  };