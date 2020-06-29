const db = require("../models/db");

exports.run = async (client, message, args) => {
    message.channel.send("...");
    const req = await db.findOne({ _id: message.guild.id })
    if (!req) return message.reply('Opa, o doc nao existe')
    message.reply(`Encontrei um documento! prefix ${req.prefix}`)
  };  