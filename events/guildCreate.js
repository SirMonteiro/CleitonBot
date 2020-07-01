const guildsdb = require("../models/guilds");
module.exports = (client, guild) => {
    console.log(`Entrei em um novo servidor: "${guild.name}" (id: ${guild.id}). Esse servidor tem ${guild.memberCount} membros!`);
    guildsdb.findOne({ id: guild.id }, (err, prefix) => {
        if (err) throw err
        if (!prefix) {
            const newguildsdb = guildsdb({
                id: guild.id,
            })
            newguildsdb.save()
        }
    })
}
