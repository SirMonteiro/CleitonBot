//const config = require('../config.json');
module.exports = async client => {
  console.log('Bot iniciado com ' + client.users.size + ' usuários, em ' + client.channels.size + ' canais de ' + client.guilds.size + ' servidores.');
	client.user.setActivity('com vocês, digite "Cleiton?", para saber mais sobre mim 😉', {type: 'PLAYING'});
}