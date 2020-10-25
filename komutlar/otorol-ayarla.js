const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const TimsahTim = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix     
let rol = message.mentions.roles.first() 
let kanal = message.mentions.channels.first()
if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 
 if(!rol) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bir Rol Belirtin.**\nRolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\`\n\n**__Önemli Not!!__**: **Oto Rol'u Ayarlayabilmek İçin Botun Rolü, Verilecek Rolün Üstünde Bir Rolde Olmalı Yoksa Rolü Veremez!** `)
 
 if(!kanal) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bir Kanal Belirtin.** \n**__Örnek Kullanım__** : \`${prefix}otorol-ayarla @Rol #Kanal\``)
 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Slowex Otorol▬▬▬▬▬▬▬▬▬
║► <a:hyqued3:763032004584538152> Otorol Aktif Edildi.
║► <a:hyqued3:763032004584538152> **${rol}** Olarak Güncelledim! 
║► <a:hyqued3:763032004584538152> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

 
  db.set(`otoRL_${message.guild.id}`, rol.id)  
  db.set(`otoRK_${message.guild.id}`, kanal.id) 
};
exports.config = {
  name: 'otorol-ayarla',
  aliases: []
};
