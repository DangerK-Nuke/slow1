
const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send(`<a:hyqued3:763032004584538152> **Hey Sen** Evet Sen! Bu Komut İçin Yeterli Yetkin Yok!`)
if (!args[0])  {
    const küfürcu0k = new Discord.MessageEmbed()
    .setTitle('Başarısız')
    .setDescription(`<a:hyqued3:763032004584538152> Bunumu Arıyorsun? \n ${prefix}küfür-engel aç/kapat`)
      return message.channel.send(küfürcu0k)

  }   
  if (args [0] == 'aç') {
    db.set(`reklamengel_${message.guild.id}`, '<a:hyqued3:763032004584538152> **Küfür Engel Sistemi Zaten Aktif Olarak Gözüküyor.**')
    let lus = await db.fetch(`kufurE_${message.guild.id}`)
    
    const reklamengelcim = new Discord.MessageEmbed()
    .setTitle('Başarılı')
      .setColor("BLUE")
    .setDescription('<a:hyqued3:763032004584538152> **Küfür Engel Sistemi Başarıyla Aktif Edildi.**')
    return message.channel.send(reklamengelcim)

  }
  
  if (args [0] == 'kapat') {
      
    db.delete(`kufurE_${message.guild.id}`)

   const küfürengelcim22 = new Discord.MessageEmbed()
    .setTitle('Başarılı')
    .setDescription('<a:hyqued3:763032004584538152> **Küfür Engel Sistemi Başarıyla Kapatıldı.**')
    return message.channel.send(küfürengelcim22)
  }

  
  
  
};
exports.config = {
 name: 'küfürengel',
  aliases: ['küfür-engel']

};
