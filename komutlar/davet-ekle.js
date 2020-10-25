const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
    return;
  }
  let u = message.mentions.users.first();
let m = args.slice(1).join(" ")
  if (!u) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Davet Eklenecek Kullanıcıyı Etiketleyin.**")
        .setColor("BLUE")
    );
  }
    if (!m) {
    return message.channel.send(
      new Discord.MessageEmbed()
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setDescription("**Eklenecek Davet Sayısını Girin.**")
        .setColor("BLUE")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`${u} Adlı Şahısa; ${m} Davet Eklendi!`);
  message.channel.send(embed);
  db.add(`davet_${u.id}_${message.guild.id}`, +m);
};
module.exports.config = {
    name: "davet-ekle",
  aliases: ["ekle-davet"]
};
