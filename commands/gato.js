const {RichEmbed} = require('discord.js');
const rgb = require('../hexrgb.js')
const rp = require('request-promise');
const cheerio = require('cheerio');
exports.run = (client, message, args) => {
  return
  rp('https://api.thecatapi.com/v1/images/search')
    .then( html => {
    let $ = cheerio.load(html);
    console.log(html.map(x => x.url))
    //console.log($)
    const embed = new RichEmbed()
      .setTitle(':art: A cor selecionada foi a:')
      .setColor(rgb.hexrgb())
      .setImage(`http://aws.random.cat/meow`);
    message.channel.send(embed);
    });
}