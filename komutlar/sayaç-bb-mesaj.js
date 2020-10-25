
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

const TimsahTim = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  
  let mesaj = args.slice(0).join(' ');
  if(mesaj.length < 5) return message.channel.send(' <a:hyqued3:763032004584538152>  **Sayaç Hoşgeldin Mesaj Sistemi İçin En Az 5 Karakter Belirtebilirsin.**\n `**__Örnek__**: ${prefix}sayaç-bb-msj -uyetag-, Sunucumuzdan Ayrıldı, -hedefuye- Kişiye Ulaşabilmek İçin -kalanuye- Kişi Kaldı. **-uyesayisi-** Kişiyiz.`')
  
 message.channel.send(' <a:hyqued3:763032004584538152> **Sayaç Görüşürüz Mesajı**\n `'+mesaj+'`\n **Olarak Ayarlandı.**') 
 db.set(`sayacBB_${message.guild.id}`, mesaj)  
  
};
exports.config = {
  name: 'sayaç-bb-mesaj',
  aliases: ['sayaç-bb-msg']
};
