const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const rp = require("request-promise");
exports.run = (client, message, args) => {
    if (!args[1]) return message.reply('Especifique a moeda para qual moeda que você quer converter.')
    if (args[2]) {
        if (isNaN(args[2])) return message.reply('Especifique um número para converter.')
        if (args[2].toString().length > 30) return message.reply('não coloque números acima de 30 dígitos.')
    }
    rp({ uri: `https://api.exchangeratesapi.io/latest?base=${args[0]}&symbols=${args[1]}`, json: true })
        .then((res) => {
            const embed = new RichEmbed()
                .setTitle(":moneybag: Aqui está a cotação:")
                .setColor(rgb.hexrgb())
                .setDescription(`**${args[2] ? args[2] : 1} ${args[0]} para ${args[1]}**: ${res.rates[args[1]] * Number(args[2] ? args[2] : 1)} ${args[1]}`)
                .setFooter(`Atualizado em ${res.date}`)
            message.channel.send(embed);
        }).catch((err) => {
            message.channel.send("Moeda não encontrada");
        });
};
