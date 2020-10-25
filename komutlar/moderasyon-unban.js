const Discord = require('discord.js');
const fs = require('fs');

exports.run = async (client, message, args) => {

  const db = require('quick.db');
  
  const fynx = require("../ayarlar/bot.json");
let TimsahTim_Prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix;
    
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Üyeleri Yasakla\`" Yetkisine Sahip Olmalısın.**`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<a:hyqued3:763032004584538152> **Mod Log Kanalı Ayarlanmamış | ${TimsahTim_Prefix}modlog #kanal**`);
  let TimsahTim_Modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.channel.send('<a:hyqued3:763032004584538152> **Lütfen Banını Açmak İstediğiniz Üyeninin ID sini Girin**');
  if (reason.length < 1) return message.channel.send('<a:hyqued3:763032004584538152> **Lütfen Sebep Giriniz**');
 
  
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .addField('<a:hyqued3:763032004584538152> İşlem', 'Ban Kaldırma')
  .addField('<a:hyqued3:763032004584538152> Banı Açılan Üye', `(${user})`)
  .addField('<a:hyqued3:763032004584538152> Banı Açan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:hyqued3:763032004584538152> Banı Açma Sebebi', "```" + reason + "```")
  TimsahTim_Modlog.send(embed);
  message.guild.members.unban(user);
  

  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`<a:minikdoru:763031811906732112> Belirttiğiniz İD'nin Banı Açıldı`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'unban',
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır']
};
