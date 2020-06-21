const { RichEmbed } = require("discord.js");
const rgb = require("../hexrgb.js");
const rp = require("request-promise");
const cheerio = require("cheerio");
exports.run = (client, message, args) => {
  if (!args[0])
    return message.reply(
      "Especifique o link do perfil da comunidade da pessoa que você quer olhar"
    );
  if (!args[0].includes("https://steamcommunity.com/"))
    return message.reply(
      "Especifique um link da de um perfil da comunidade steam válido"
    );
  rp(args[0] + "?l=brazilian").then((html) => {
    let $ = cheerio.load(html);
    let ban = $(".profile_ban_status").text();
    ban = ban.replace("| Informações", "");
    if (ban == "") ban = "Nenhum VAC ban.";
    if (
      $(".profile_private_info")
        .text()
        .includes("Esse usuário ainda não criou um perfil da Comunidade Steam")
    )
      ban = "Esse usuário não tem perfil na comunidade steam.";
    if ($(".profile_private_info").text().includes("Este perfil é privado"))
      ban = "Este perfil está privado.";
    let profileimage = $(".playerAvatarAutoSizeInner img").attr("src");
    let profilename = $(".actual_persona_name").text();
    const embed = new RichEmbed()
      .setTitle(":axe: O perfil " + profilename + " está com:")
      .setColor(rgb.hexrgb())
      .setDescription(ban)
      .setThumbnail(profileimage);
    message.channel.send(embed);
  });
};
