const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
    return;
  }
  let kanal = message.mentions.channels.first();
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Bir Kanal Belirtin.")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLUE")
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet Kanalı; ${kanal} Olarak Ayarlandı.`);
  message.channel.send(embed);
  db.set(`davetkanal_${message.guild.id}`, kanal.id);
};
module.exports.config = {
  name: "davet-kanal",
  aliases: ["davetkanal"]
};

