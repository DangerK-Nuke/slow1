const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
    return;
  }
  let kanal = await db.fetch(`davetkanal_${message.guild.id}`)
  if (!kanal) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Davet Kanalı Zaten Ayarlanmamış Olarak Gözüküyor.")
      .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("BLUE")
    );
  }
  db.delete(`davetkanal_${message.guild.id}`)
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
  .setFooter(bot.user.username, bot.user.avatarURL)
    .setDescription(`Davet Kanalı Başarıyla Sıfırlandı.`);
  message.channel.send(embed);
return
  
};
module.exports.config = {
  name: "davet-kanal-sıfırla",
  aliases: ["davetkanalsıfırla"]
};

