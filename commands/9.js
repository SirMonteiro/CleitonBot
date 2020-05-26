exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('Este número fenomenal deve ser escrito mais uma vez após sua ordem, ex: ' + client.prefix + '9 9')
  //if(!args.toString().includes("9")) return message.reply('Você é burro cara, tem que usar somente 9!')
  if(!new RegExp(/^[9]+$/).test(args.toString().replace(/,/g, ""))) return message.reply('Em meio a infinitos números, existe um especial,caso não o conheça,este é o 9')
  //message.channel.send('Comando em manutenção!')
  // Aproveitar a puta que o pariu!
  message.channel.send(args.toString().replace(/,/g, "") + '9?')
}