const db = require("quick.db");
const Discord = require('discord.js');
const TimsahTim = require("../ayarlar/bot.json");
exports.run = async (client, message, args) => { 
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
let eklenti = new Discord.MessageEmbed()  
.setColor('BLUE') 
.setAuthor(`Slowex | Moderasyon Komutları`, client.user.avatarURL())
.setDescription(`<a:hyqued3:763032004584538152> Slowex Botumuzu Eklemek İçin \`${prefix}davet\` Yazabilirsiniz.`)
.addField(`__Sayaç__`,`<a:krmzbakm:763134536358953020> \`${prefix}sayaç-menü\` Sunucunuza Sayaç Kurarsınız ve Anlık Bilgi Alırsınız`,true)
.addField(`__Otomatik Rol__`,`<a:krmzbakm:763134536358953020> \`${prefix}otorol-menü\` Suncunuza Yeni Gelen Üyelere Belirlediğiniz Rölü Verir`,true)
.addField(`__Ban__`,`<a:krmzbakm:763134536358953020> \`${prefix}ban\` Sunucunuzda Belirtiğiniz Kişiyi Yasaklar`,true)
.addField(`__Kick__`,`<a:krmzbakm:763134536358953020> \`${prefix}kick\` Sunucunuzda Belirtiğiniz Kişiyi Kickler`,true)
.addField(`__Ban Kaldırma__`,`<a:krmzbakm:763134536358953020> \`${prefix}unban\` yazarak Sunucunuzda Belirtiğiniz Kişinin Banını Açar`,true)
.addField(`__Mod Log__`,`<a:krmzbakm:763134536358953020> \`${prefix}modlog\` Sunucunuzda Moderasyon Kayıt Logununu Tuttar`,true)
.addField(`__Ban Say__`,`<a:krmzbakm:763134536358953020> \`${prefix}bansay\` Sunucunuzdan Kaç Kişi Ban Yemiş`,true)
.addField(`__Ban Sorgu__`,`<a:krmzbakm:763134536358953020> \`${prefix}bansorgu\` Kişinin Neden Banlandığını Gösterir`,true)
.addField(`__Küfür Engel__`,`<a:krmzbakm:763134536358953020> \`${prefix}küfürengel\` Küfür Edilmesini Tamamen Yasaklar.`,true)
.addField(`__Reklam Engel__`,`<a:krmzbakm:763134536358953020> \`${prefix}reklamengel\` Reklam Yapılmasını Tamamen Yasaklar.`,true)
.addField(`__Reklam Kick__`,`<a:krmzbakm:763134536358953020> \`${prefix}reklam-kick\` Reklam Yapan Kişiyi 3 Uyarıdan Sonra Kickler`,true)
.addField(`__Mesaj Temizleme__`,`<a:krmzbakm:763134536358953020> \`${prefix}sil\` Belirtiğiniz Kadar Mesaj Siler`,true)
.addField(`__Yavaş Mod__`,`<a:krmzbakm:763134536358953020> \`${prefix}yavaşmod\` Kanala Yazı Süre Limiti Koyar.`,true)
.addField(`__Sa-As__`,`<a:krmzbakm:763134536358953020> \`${prefix}sa-as\` Sunucuzda Selam Verenlere Selam Der`,true)
.addField(`__Yasaklı Tag__`,`<a:krmzbakm:763134536358953020> \`${prefix}yasaklı-tag\` Sunucuza Belirli Taga Sahip Üyeler Giremez`,true)
.addField(`__Bilgilendirme__`,`<a:hyqued3:763032004584538152> \`${prefix}davet\` | Slowex'i Sunucunuza Davet Edersiniz\n<a:hyqued3:763032004584538152> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir \n <a:hyqued3:763032004584538152> \`${prefix}ayarlar\` | Sunucunuzdaki Açık veya Kapalı Komutları Gösterir`)
.setImage(`https://cdn.discordapp.com/attachments/568831784024801316/764214278600654888/Slowex_Wallpaper.png`)
.setThumbnail(client.user.avatarURL)
 message.channel.send(eklenti) 
  };
exports.config = {
name: "moderasyon-menü",
  aliases: ["yardım-moderasyon","moderasyon-sistemi"]
}
