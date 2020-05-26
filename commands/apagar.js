exports.run = (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Você não tem a permissão \"MANAGE_MESSAGES\" para realizar esse comando, se você for um admin, favor contate o Dono")
    if(!args.length) return message.reply("Você deve colocar o tanto de mensagens a ser removido!")
    if(isNaN(args[0])) return message.reply("Você deve colocar o tanto de mensagens a ser removido em formato numérico")
    if(args[0] > 1000) return message.reply("Ei, você só pode no máximo excluir 1000 mensagens!")
    message.delete()
    setTimeout(() => {
        
        if(args[0] > 100){
            let msgstodelints
            for(let i = 0; i < Math.trunc(args[0]/100); i++){
                message.channel.fetchMessages({limit:100}).then(messages => {
                    if(msgstodelints < 100) {
                        msgstodelints = 0
                        return
                    }
                    msgstodelints = messages.array().length
                    message.channel.bulkDelete(msgstodelints)
                })
            }
            message.channel.fetchMessages({limit:Number(args[0].toString().slice(-2))}).then(messages => {
                let msgstodel = messages.array().length
                message.channel.bulkDelete(msgstodel)
                message.channel.send(`Chat foi limpo por ${message.author}. Foram limpas ${msgstodel + msgstodelints} mensagens!`).then(msg =>{msg.delete(3000)})
            })
        }else{
            message.channel.fetchMessages({limit:args[0]}).then(messages => {
                let msgstodel = messages.array().length
                message.channel.bulkDelete(msgstodel)
                message.channel.send(`Chat foi limpo por ${message.author}. Foram limpas ${msgstodel} mensagens!`).then(msg =>{msg.delete(3000)})
            })
        }
    }, 50);
}
