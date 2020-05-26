const db = require('quick.db')
const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = (client, message, args) => {
  if (!args[0]) return message.reply('selecione pedra,papel ou tesoura!')
  if (!['pedra', 'papel', 'tesoura'].includes(args[0])) return message.reply(`selecione pedra,papel ou tesoura! Ex: ${client.prefix}pps pedra`)
  let member = message.mentions.members.first() || message.author
  let guildb = new db.table('guild_' + message.guild.id)
  let bot
  let player = args[0].charAt(0).toUpperCase() + args[0].slice(1)
  let endmessage
  let dinheiro = 0
  switch (RandInt(0,2)){
    case 0:
      bot = 'Pedra'
      break
    case 1:
      bot = 'Papel'
      break
    case 2:
      bot = 'Tesoura'
  }
  
  if(player == 'Pedra'){
    
    if(bot == 'Pedra'){
      empatou()
    } else if(bot == 'Papel'){
      perdeu()
    } else {
      ganhou()
    }
    
  } else if(player == 'Papel'){
    
    if(bot == 'Pedra'){
      ganhou()
    } else if(bot == 'Papel'){
      empatou()
    } else {
      perdeu()
    }
    
  } else {
    
    if(bot == 'Pedra'){
      perdeu()
    } else if(bot == 'Papel'){
      ganhou()
    } else {
      empatou()
    }
    
  }
  
  function ganhou(){
    dinheiro = RandInt(1,200)
    guildb.add(`money_${member.id}`, dinheiro)
    endmessage = `${member} parabéns, você ganhou **R$${dinheiro}**`
  }
  function empatou(){
    endmessage = `${member} que pena, você empatou!`
  }
  function perdeu(){
    dinheiro = RandInt(1,200)
    guildb.subtract(`money_${member.id}`, dinheiro)
    if (guildb.get(`money_${member.id}`) < 0) guildb.set(`money_${member.id}`, 0)
    endmessage = `${member} que pena, você perdeu **R$${dinheiro}**`
    
  }
  
  const ppsEmbed = new RichEmbed()
    .setTitle('Pedra, papel, tesoura')
    .setColor(rgb.hexrgb())
    .addField(`${message.member.user.username}: ${player} **VS** ${bot} :Cleiton`, endmessage)
  message.channel.send(ppsEmbed)
  
}

function RandInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}