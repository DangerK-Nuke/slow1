const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send('<a:hyqued3:763032004584538152>  **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin.**\n `**__Örnek__**: `-oto-rol-msg -uye- Hoşgeldin. Seninle Beraber -uyesayisi- Kişiyiz.`')
  
 message.channel.send('<a:hyqued3:763032004584538152> **Oto-Rol mesajı** `'+mesaj+'` **Olarak Ayarlandı.**') 
 db.set(`otoRM_${message.guild.id}`, mesaj)  

  
};
exports.config = {
  name: 'otorol-mesaj', 
  aliases: ['otorolmesaj','otorol-mesaj-ayarla','otorolmesaj-ayarla', 'otorolmesajayarla']
};

