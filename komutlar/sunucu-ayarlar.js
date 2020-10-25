const Discord = require('discord.js'); 
const db = require('quick.db'); 
const ayarlar = require('../ayarlar/bot.json')
exports.run = async (client, message, args) => { 
let p = await db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix
if (!message.guild) return;


const sayfa = [`**${message.guild.name} <a:hyqued3:763032004584538152> Sunucu Ayarları**\n<a:kumuz:763134316972081242> **Botun Prefixi :** \`${p}\n<a:kumuz:763134316972081242> **Reklam Engel:** ${db.fetch(`reklamengel_${message.guild.id}`) ? `<a:minikdoru:763031811906732112> ` : `<a:minikyanl:763031635532316694>` }\n<a:kumuz:763134316972081242> **Küfür Engel:** ${db.fetch(`kufurE_${message.guild.id}`) ? `<a:minikdoru:763031811906732112> ` : `<a:minikyanl:763031635532316694>` }`] 
const TimsahTim = new Discord.MessageEmbed() 
.setColor('BLUE') 
.setDescription(sayfa)
.setTimestamp() 
message.channel.send(TimsahTim) 
}; 


exports.config = { 
name: "ayarlar",
aliases: ["sunucu-ayarları","sunucu-ayarlar"]
}