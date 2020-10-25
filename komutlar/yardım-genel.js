const db = require("quick.db");
const Discord = require('discord.js');
const TimsahTim = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Slowex | Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`${prefix}davet\` Yazabilirsiniz.`)
.addField(`__Komut Sayısı__`,`<a:kumuz:763134316972081242> \`${prefix}komutlar\` Botun Komut Sayısını Gösterir`,true)
.addField(`__Davet Et__`,`<a:kumuz:763134316972081242> \`${prefix}davet\` Botumuzu Davet Edersiniz`,true)
.addField(`__Bot Bilgi__`,`<a:kumuz:763134316972081242> \`${prefix}istatistik\` Botumuzun İstatistikleri`,true)
.addField(`__Profil__`,`<a:kumuz:763134316972081242> \`${prefix}profil\` Kullanıcı Profilinizi Gösterir`,true)
.addField(`__Oylama__`,`<a:kumuz:763134316972081242> \`${prefix}oylama\` Sunucuda Oylama Başlatır`,true)
.addField(`__Duyuru__`,`<a:kumuz:763134316972081242> \`${prefix}duyuru\` Sunucuda Duyuru Yapar`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`${prefix}davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "genel-menü",
  aliases: ["yardım-genel","genel-sistemi"]
}
