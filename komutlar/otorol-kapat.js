const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 const rol = db.fetch(`otoRL_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:hyqued3:763032004584538152>  **Bu Özellik Zaten Kapalı Olarak Gözüküyor.**`)
 
 
  message.channel.send(`<a:hyqued3:763032004584538152>  **Otorol Sistemi Başarılı Bir Şekilde Kapatıldı.**`)

 
  db.delete(`otoRL_${message.guild.id}`)  
  db.delete(`otoRK_${message.guild.id}`) 
  db.delete(`otoRM_${message.guild.id}`)  
};
exports.config = {
  name: 'oto-rol-kapat',
  aliases: ["otorol-kapat", "otorolkapat"]
};
