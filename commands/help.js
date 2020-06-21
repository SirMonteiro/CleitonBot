const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
exports.run = (client, message, args) => {
  let commands;
  if (!args[0]) {
    const helpembed = new RichEmbed()
      .setTitle(":mag_right: Ajuda do Cleiton")
      .setColor(rgb.hexrgb())
      .addField(":moneybag: Moeda", `\`${client.prefix}help moeda\``, true)
      .addField(":game_die: Jogos", `\`${client.prefix}help jogos\``, true)
      .addField(
        ":joy: Entreterimento",
        `\`${client.prefix}help entreterimento\``,
        true
      )
      .addField(
        ":tools: Utilidades",
        `\`${client.prefix}help utilidades\``,
        true
      )
      .addField(
        ":gear: Admin e config",
        `\`${client.prefix}help config\``,
        true
      )
      .setFooter(`Use ${client.prefix} antes de qualquer comando!`);
    message.channel.send(helpembed);
    return;
  }
  if (
    !["moeda", "jogos", "entreterimento", "utilidades", "config"].includes(
      args[0]
    )
  )
    return message.reply(
      `selecione uma das opções mostradas no ${client.prefix}help ! Ex: ${client.prefix}help jogos`
    );
  switch (args[0]) {
    case "moeda":
      commands = {
        dinheiro: "Veja a sua quantidade atual de dinheiro!",
      };
      break;
    case "jogos":
      commands = {
        dadinho: "Dado para utilizar no RPG de cada dia.",
        roleta: "Rolete ela para tentar ganhar dinheiro!",
        ppt: "Aposte pedra,papel ou tesoura com o Cleiton!",
      };
      break;
    case "entreterimento":
      commands = {
        "9": "99? 999? 9999?",
        f: "F para demonstrar respeito.",
        falar: "Pague para Cleiton falar uma mensagem para você!",
        frasedodia: "frase inspiradoura pra melhorar seu dia.",
        gato: "miau miau, miau miau?",
        cachorro: "au au au, au au au. AU?",
        piada: "Toc-Toc?",
      };
      break;
    case "utilidades":
      commands = {
        help: "Te mostra como usar esse magnífico bot.",
        ping: "Diz a frequência cardíaca do Cleiton.",
        botinfo: "Informações sobre o bot",
        clima: "Mostra a previsão do tempo atual.",
        google: "O google, mas não é no google ",
        cor: "cor em hex. Uma cor bonita pro seu dia",
        covid: "Informações sobre o COVID-19",
        hastebin:
          "Gera um arquivo de texto sem limites para voce compartilhar seu livro de 9 mil páginas",
        vacban: "Veja se aquele trollzinho ja foi de beise",
      };
      break;
    case "config":
      commands = {
        mudarprefix: "muda o prefix do bot no seu servidor!",
        apagar: "shh ninguem viu...",
        ban: "Ban neles!",
        kick: "Um aviso...",
      };
      break;
  }
  let helpmes = "";
  Object.keys(commands).forEach(function (command) {
    helpmes +=
      "`" + client.prefix + command + "`" + "\n" + commands[command] + "\n \n";
  });

  const helppembed = new RichEmbed()
    .setTitle(":mag_right: Ajuda do Cleiton")
    .setColor(rgb.hexrgb())
    .setDescription(helpmes)
    .setFooter(`Use ${client.prefix} antes de qualquer comando!`);
  message.channel.send(helppembed);
};
