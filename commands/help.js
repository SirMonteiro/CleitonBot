const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
exports.run = (client, message, args) => {
    let commands
    if(!args[0]) {
      const helpembed = new RichEmbed()
      .setTitle(':mag_right: Ajuda do Cleiton')
      .setColor(rgb.hexrgb())
      .addField(':moneybag: Moeda', `\`${client.prefix}help moeda\``, true)
      .addField(':game_die: Jogos', `\`${client.prefix}help jogos\``, true)
      .addField(':bulb: Interações', `\`${client.prefix}help interacoes\``, true)
      .addField(':gear: Admin e config', `\`${client.prefix}help config\``, true)
      .setFooter(`Use ${client.prefix} antes de qualquer comando!`);
      message.channel.send(helpembed);
      return
      }
    if (!['moeda', 'jogos', 'interacoes', 'config'].includes(args[0])) return message.reply(`selecione uma das opções mostradas no ${client.prefix}help ! Ex: ${client.prefix}help jogos`)
    switch(args[0]){
        case 'moeda':
          commands = {
            "dinheiro": "Veja a sua quantidade atual de dinheiro!",
          }
        break
        case 'jogos':
          commands = {
            "dadinho": "Dado para utilizar no RPG de cada dia.",
            "roleta": "Rolete ela para tentar ganhar dinheiro!",
            "ppt": "Aposte pedra,papel ou tesoura com o Cleiton!",
          }
        break
        case 'interacoes':
          commands = {
            "help": "Te mostra como usar esse magnífico bot.",
            "ping": "Diz a frequência cardíaca do Cleiton.",
            "9": "99? 999? 9999?",
            "f": "F para demonstrar respeito.",
            "falar": "Pague para Cleiton falar uma mensagem para você!",
            "frasedodia": "frase inspiradoura pra melhorar seu dia.",
            "clima": "Mostra a previsão do tempo atual.",
            "google": "s",
            "cor": "cor em hex",
          }
        break
        case 'config':
          commands = {
            "mudarprefix": "muda o prefix do bot no seu servidor!",
            "apagar": "shh ninguem viu...",
            "ban": "Ban neles!",
            "kick": "Um aviso...",
          }
        break
    }
    let helpmes = ""
    Object.keys(commands).forEach(function(command) {

        helpmes += "`" + client.prefix + command + "`" + "\n" + commands[command] + "\n \n" 
      
      });

    const helppembed = new RichEmbed()
      .setTitle(':mag_right: Ajuda do Cleiton')
      .setColor(rgb.hexrgb())
      .setDescription(helpmes)
      .setFooter(`Use ${client.prefix} antes de qualquer comando!`);
      message.channel.send(helppembed);
}