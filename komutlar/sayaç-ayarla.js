const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async (client, message, args) => { 
const TimsahTim = require("../ayarlar/bot.json");
let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix   
let kanal = message.mentions.channels.first() 
let sayı = args[1]
let kalan = args[1] - message.guild.memberCount
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
 
 if(!kanal) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bir Sayaç Kanalı Belirtin!** \n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
  
 if(isNaN(args[1])) return message.channel.send(`<a:hyqued3:763032004584538152>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)
 
 if(message.guild.memberCount > args[1]) return message.channel.send(`<<a:hyqued3:763032004584538152>  **Belirttiğin Sayı Çok Küçük Veya O Sayıya Zaten Ulaşmışsın!**\n**__Örnek Kullanım__** : \`${prefix}sayaç-ayarla #kanal <Sayı>\``)

 
  message.channel.send(`╔▬▬▬▬▬▬▬▬Slowex Sayaç▬▬▬▬▬▬▬▬▬
║► <a:hyqued3:763032004584538152> Sayaç Aktif Edildi.
║► <a:hyqued3:763032004584538152> **${args[1]}** Olarak Güncelledim! 
║► <a:hyqued3:763032004584538152> Kayıt Kanalını **${kanal}** Olarak Güncelledim! 
║► <a:hyqued3:763032004584538152> ${args[1]} Kişi Olmaya Son <a:760135915590647848:763031727286779905> **${kalan}** <a:760135915590647848:763031727286779905> Kişi Kaldı!
╚▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬`)

  
  db.set(`sayacK_${message.guild.id}`, kanal.id)  
  db.set(`sayacS_${message.guild.id}`, sayı) 
};

exports.config = {
  name: 'sayaç-ayarla',
  aliases: ["sayaçayarla"]
};

