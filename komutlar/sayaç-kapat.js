const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 const rol = db.fetch(`sayacS_${message.guild.id}`)  
 if(!rol) return message.reply(`<a:krmzbakm:763134536358953020>  **Sayaç Sistemi Zaten Kapalı Olarak Gözüküyor.**`)
 
 
  message.channel.send(`<a:minikdoru:763031811906732112>  **Sayaç Sistemi Başarıyla Kapatıldı!**`)

 
  db.delete(`sayacS_${message.guild.id}`)  
  db.delete(`sayacK_${message.guild.id}`)  
  db.delete(`sayacBB_${message.guild.id}`) 
  db.delete(`sayacHG_${message.guild.id}`)  
};
exports.config = {
  name: 'sayaç-kapat',
  aliases: ["sayac-kapat","sayaçkapat"]
};
