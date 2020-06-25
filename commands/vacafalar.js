const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const cowsay = require("cowsay");
exports.run = (client, message, args) => {
    let txt
    if(!args[0]) {txt = "Moo"} else {txt = args.join(" ")}
    if(txt.length > 60) return message.reply("Só pode colocar mensagens para a vaca falar de até 60 caracteres!")
    const embed = new RichEmbed()
    .setTitle(":cow: Aqui está sua frase falada por uma vaca:")
    .setColor(rgb.hexrgb())
    .setDescription("```" + cowsay.say({
        text : txt,
        e : "oO",
        T : "U "
    }) + "```");
    message.channel.send(embed);
};
