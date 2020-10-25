const db = require("quick.db");
const Discord = require('discord.js');
const TimsahTim = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Slowex | Oto Rol Komutları`, client.user.avatarURL())
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`${prefix}davet\` Yazabilirsiniz.`)
.addField(`__Oto Rol Ayarla__`,`<a:krmzbakm:763134536358953020> \`${prefix}otorol-ayarla\` Sunucunuzda Otorol Ayarlar.`,true)
.addField(`__Oto Rol Kapat__`,`<a:krmzbakm:763134536358953020> \`${prefix}otorol-kapat\` Sunucunuzdaki Otorol'ü Kapatır.`,true)
.addField(`__Oto Rol Mesaj__`,`<a:krmzbakm:763134536358953020> \`${prefix}otorol-mesaj\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Oto Rol Mesaj Sıfırla__`,`<a:krmzbakm:763134536358953020> \`${prefix}otorol-mesaj-sıfırla\` Sunucunuzdaki Otorol'ün Mesajını Ayarlar.`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`${prefix}davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "otorol-menü",
  aliases: ["yardım-otorol","otorol-sistemi"]
}
