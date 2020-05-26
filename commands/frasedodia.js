const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
const rp = require('request-promise');
const cheerio = require('cheerio');
exports.run = (client, message, args) => {
  rp('https://www.pensador.com/frases_do_dia/' + getRandomInt(1,1000))
    .then(html => {
    let $ = cheerio.load(html);
    let frase = $('.thought-card')[getRandomInt(1,20)].attribs['data-src']
    const embed = new RichEmbed()
      .setTitle(':page_with_curl: A frase do dia de hoje:')
      .setColor(rgb.hexrgb())
      .setImage(frase)
      message.channel.send(embed);
    });
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}