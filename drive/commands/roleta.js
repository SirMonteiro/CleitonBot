const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = (client, message, args) => {
  if (!args[0]) return message.reply('digite ?roleta 6')
  if (isNaN(args)) return message.reply('APENAS A ROLETA NÚMERO 6 ESTÁ DISPONÍVEL!!')
  if (args[0] < 5 || args[0] > 7) return message.reply('APENAS A ROLETA NÚMERO 6 ESTÁ DISPONÍVEL!!')
  let d = Math.floor(Math.random() * args[0]) + 2;
  let a = Math.floor(Math.random() * args[0]) + 4;
  let e = Math.floor(Math.random() * args[0]) + 3;
  let q = Math.floor(Math.random() * args[0]) + 2;
  let x = Math.floor(Math.random() * args[0]) + 3;
  let h = Math.floor(Math.random() * args[0]) + 2;
  let w = d*a*e - x*q*h
  let res
  let s = Math.a
  if (w < 0){
    //return message.reply('perdeu' + 'R$' + Math.abs(w))
    res = message.author + ' perdeu ' + 'R$' + Math.abs(w)
  } else {
    //return message.channel.send(dadinhoEmbed)
    res = message.author + ' ganhou ' + 'R$' + w
  }
  const dadinhoEmbed = new RichEmbed()
    .setTitle('Roletando...')
    .setColor(rgb.hexrgb())
    .setDescription(res)
  message.channel.send(dadinhoEmbed)
}