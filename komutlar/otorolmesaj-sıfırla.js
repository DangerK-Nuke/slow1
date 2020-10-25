const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 const rol = db.fetch(`otoRM_${message.guild.id}`) 
 if(!rol) return message.reply(`<a:hyqued3:763032004584538152>  Ayarlanmış Bir Özellik Sıfırlanamaz.**`)
 
 
  message.channel.send(`<a:hyqued3:763032004584538152>  **Otorol Mesajı Başarılı Bir Şekilde Sıfırlandı.**`)

 
 db.delete(`otoRM_${message.guild.id}`)  

};
exports.config = {
  name: 'otorol-mesaj-sıfırla',
  aliases: ["otorolmesajsıfırla"]
};
