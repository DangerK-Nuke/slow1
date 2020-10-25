const db = require("quick.db");
const Discord = require('discord.js');
const TimsahTim = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Slowex | Eklenti Komutları`, client.user.avatarURL())
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`${prefix}davet\` Yazabilirsiniz.`)
.addField(`__Kanal Ayarla__`,`<a:krmzbakm:763134536358953020> \`${prefix}kayıt-kanal-ayarla\` Kayıt Ol Komutunun Kullanılacağı Kanalı Belirler`,true)
.addField(`__Kayıt Log__`,`<a:krmzbakm:763134536358953020> \`${prefix}kayıt-log-kanal-ayarla\` Kayıt Ol Komutunun Denetim Kaydı Kanalını Belirler`,true)
.addField(`__Kayıt Ol__`,`<a:krmzbakm:763134536358953020> \`${prefix}kayıt-ol\`  Kayıt Kanalında Kayıt Olmanızı Sağlar`,true)
.addField(`__Verilecek Rol__`,`<a:krmzbakm:763134536358953020> \`${prefix}kayıt-verilecek-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek Rolü Belirler`,true)
.addField(`__Alınacak Rol__`,`<a:krmzbakm:763134536358953020>\`${prefix}kayıt-alınacak-rol-ayarla\` Kayıt Ol Komutunu Kullandıktan Sonra Alınacak Rolü Belirler`,true)
.addField(`__Giriş Sistemi__`,`<a:krmzbakm:763134536358953020> \`${prefix}giriş-sistemi\` Kayıt Kanalına Atılacak Mesajı Ayarlar`,true)
.addField(`__İsim Sistem__`,`<a:krmzbakm:763134536358953020>\`${prefix}isim-sistem\` Kayıt Ol Komutunu Kullandıktan Sonra Verilecek İsmi Belirler`,true)
.addField(`__Kayıt Sistemi Kapat__`,`<a:krmzbakm:763134536358953020> \`${prefix}kayıt-sistemi-kapat\` Kayıt Sistemini Tamamen Kapatır`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`${prefix}davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "kayıt-menü",
  aliases: ["yardım-kayıt","kayıt-sistemi"]
}
