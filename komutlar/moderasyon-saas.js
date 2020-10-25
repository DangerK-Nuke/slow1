const db = require('quick.db')
const Discord = require('discord.js')
 
 
exports.run = async (bot, message, args) => {

  const TimsahTim = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
  
  if (!args[0]) return message.channel.send(`Aç Yada Kapat Yazmalısın. Örnek: **${prefix}sa-as aç**`)
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Mesajları_Yönet\`" Yetkisine Sahip Olmalısın.**`);
 
  if (args[0] === 'aç') {
    
    db.set(`ssaass_${message.guild.id}`, 'acik')
    message.channel.send(`<a:hyqued3:763032004584538152>  **Artık Slowex Birisi Selam Verince Selamını Alıcaktır!. Kapatmak İçin "\`${prefix}sa-as kapat\`" Yazmalısın.**`)
 
  }
  
  if (args[0] === 'kapat') {
    
    db.set(`ssaass_${message.guild.id}`, 'kapali')
    message.channel.send(`<a:hyqued3:763032004584538152> **Artık Slowex Biri Selam Verince Selamını Almıyacaktır!**`)

  }
 
}
exports.config = {
  name: 'sa-as',
  aliases: ['sa-as-sistemi']
};
 
