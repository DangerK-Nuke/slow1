const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix


  const db = require('quick.db');
  

  
  if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('<a:hyqued3:763032004584538152> **Gerekli izniniz bulunmuyor**')

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
 if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:hyqued3:763032004584538152> **Mod Log Kanalı Ayarlanmamış Ayarlamak için  | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:hyqued3:763032004584538152> **Lütfen Kicklemek İstediğiniz Kullanıcıyı Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:hyqued3:763032004584538152>  **Kickleme Sebebinizi Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:hyqued3:763032004584538152> **Kendini Kickleyeceğine Kendin Çıksana ?**');

  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .addField('<a:hyqued3:763032004584538152> İşlem', 'Sunucudan Kickleme')
  .addField('<a:hyqued3:763032004584538152> Kicklenen Üye', `${user.tag} (${user.id})`)
  .addField('<a:hyqued3:763032004584538152> Kickleyen Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:hyqued3:763032004584538152> Kick Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.member(user).kick();
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`<a:setting:750076062716788807<a:hyqued3:763032004584538152> **Kullanıcı Başarıyla Kicklendi**`)
  message.channel.send(embed2)
  
};

exports.config = {  
  name: 'at',
  aliases: ['kick']
 
};

