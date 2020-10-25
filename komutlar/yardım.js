 const db = require("quick.db");
const Discord = require('discord.js');
const TimsahTim = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`Slowex | Yardım Menüsü`, client.user.avatarURL())
.setColor('BLUE')
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`${prefix}davet\` Yazabilirsiniz.`)  
.addField(`__Genel Komutlar__`,`<a:hyqued3:763032004584538152> \`${prefix}genel-menü\``,true)
.addField(`__Mod Komutları__`,`<a:hyqued3:763032004584538152> \`${prefix}moderasyon-menü\` `,true)
.addField(`__Guard Komutları__`,`<a:hyqued3:763032004584538152> \`${prefix}guard-menü\`  `,true)
.addField(`__Müzik Komutları__`,`<a:hyqued3:763032004584538152> \`${prefix}müzik-menü\` `,true)
.addField(`__Eklenti Komutları__`,`<a:hyqued3:763032004584538152> \`${prefix}eklenti-menü\`  `,true)
.addField(`__Nsfw Komutları__`,`<a:hyqued3:763032004584538152> \`${prefix}nsfw-menü\` `,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`${prefix}davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "yardım",
  aliases: ["help","yardım-menü","yardım-sistemi"]
}