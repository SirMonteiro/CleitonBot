const moneydb = require("../models/money");
exports.run = (client, message, args) => {
    let member = message.mentions.members.first();
    if (!member || isNaN(args[1]) || args[2]) return message.channel.send(`Especifique quanto e para quem quer pagar com: ${client.prefix}pagar <pessoa> <quantia>`)
    moneydb.findOne({ guildID: message.guild.id, userID: message.author.id }, (err, money) => {
        if (err) throw err
        if (!money || money.money < args[1]) {
            return message.channel.send('Você não tem essa quantia para pagar!')
        } else {
            money.money = money.money - args[1]
            money.save()
            moneydb.findOne({ guildID: message.guild.id, userID: member.id }, (err, money) => {
                if (err) throw err
                if (!money) {
                    const newmoneydb = new moneydb({
                        guildID: message.guild.id,
                        userID: member.id,
                        money: args[1],
                    });
                    newmoneydb.save();
                } else {
                    money.money = money.money + args[1]
                    money.save()
                }
                message.channel.send(`:bank: ${message.author} pagou R$${args[1]} para o ${member}.`);
            })
        }
    })
};
