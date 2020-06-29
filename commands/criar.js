const db = require("../models/guild");

exports.run = async (client, message, args) => {
    message.channel.send("...");
    const req = await db.findOne({ id: message.guild.id })
    if(req) return message.reply(`O doc ja existe e fala que é ${req.prefix}`)
    const doc = new db({ id: message.guild.id })
    await doc.save()
    message.reply('Criou um novo documento!')
  };