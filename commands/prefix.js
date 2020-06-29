const db = require("../models/guild");

exports.run = async (client, message, args) => {
  message.channel.send("...");
  const req = await db.findOne({ id: message.guild.id })
  if (!req) return message.reply('Opa, o doc nao existe')
  message.reply(`Encontrei um documento! prefix ${req.prefix}`)
};  