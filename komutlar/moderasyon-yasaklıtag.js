const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => { 
  const fynx = require("../ayarlar/bot.json");
let TimsahTim_Prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<<a:hyqued3:763032004584538152> **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  
if(!args[0]) return message.channel.send(`<a:minikyanl:763031635532316694>Yasaklı Tag Sistemini Kullanabilmek İçin: ${TimsahTim_Prefix}**yasaklı-tag ekle tag** Yazmalısın.`)
let TimsahTim_Argümanlar = ['ekle', 'çıkar']
if(!TimsahTim_Argümanlar.includes(args[0])) return message.channel.send(`<a:minikyanl:763031635532316694> Sadece ${TimsahTim_Prefix}**yasaklı-tag ekle**/**çıkar** Kullanabilirsin.`)
if(args[0] === 'ekle') {
const TimsahTim_Tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(TimsahTim_Tag) return message.channel.send(`<a:hyqued3:763032004584538152> Sadece Bir Tag Ekleyebilirsin.`)
if(!args[1]) return message.channel.send(`Bir Tag Yazmalısın.`)  
await db.set(`banned-tag.${message.guild.id}`, args[1])
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** Tagı Yasaklı Olarak Listeye Eklendi.`)
.setColor('BLUE')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  
  
if(args[0] === 'çıkar') {
  
const tag = await db.fetch(`banned-tag.${message.guild.id}`)
if(!tag) return message.channel.send(` <a:minikyanl:763031635532316694> Hiç Tag Eklememişsin.`)
if(!args[1]) return message.channel.send(`<a:hyqued3:763032004584538152> Bir Tag Yazmalısın.`)
  
await db.delete(`banned-tag.${message.guild.id}`)
  
message.channel.send(new Discord.RichEmbed()
.setDescription(`**${args[1]}** Tagı Artık Yasaklı Değil..`)
.setColor('BLUE')
.setAuthor(message.author.username, message.author.avatarURL)) 
}
  

};
exports.config = {
  name: 'yasaklı-tag',
  aliases: []
};
