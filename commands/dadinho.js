const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = (client, message, args) => {
  if (!args[0]) return message.reply('Isso realmente existe?')
  if (isNaN(args)) return message.reply('O dado que você escolheu não é um número!')
  if (args[0] < 2 || args[0] > 100) return message.reply('Esse não é um número válido!')
  let d = Math.floor(Math.random() * args[0]) + 1;
  const dadinhoEmbed = new RichEmbed()
    .setTitle(':game_die: Jogando dado...')
    .setColor(rgb.hexrgb())
    .setDescription('O seu dado caiu no número: ' + d)
  message.channel.send(dadinhoEmbed)
}