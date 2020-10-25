const Discord = require('discord.js');
const fs = require('fs');

const ayarlar = require('../ayarlar/bot.json');

exports.run = async(client, message, args) => {

  let prefix = await require('quick.db').fetch(`prefix.${message.guild.id}`) || ayarlar.prefix

  const db = require('quick.db');
  

    
    if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Kullanıcı_Engelle\`" Yetkisine Sahip Olmalısın.**`);

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  
  if (db.has(`log_${message.guild.id}`) === false) return message.channel.send(`<<a:hyqued3:763032004584538152  **Mod Log Kanalı Ayarlanmamış Ayarlamak İçin** | ${prefix}modlog #kanal`);
  let modlog = message.guild.channels.cache.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.channel.send('<a:hyqued3:763032004584538152 **Lütfen Banlamak İstediğiniz Üyeyi Etiketleyin**');
  if (reason.length < 1) return message.channel.send('<a:hyqued3:763032004584538152 **Lütfen Sebep Giriniz**');
  if (user.id === message.author.id) return message.channel.send('<a:hyqued3:763032004584538152 **Dostum Kendini Banlıyamazsın**');

  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .addField('<a:hyqued3:763032004584538152 İşlem', 'Sunucudan Banlama')
  .addField('<a:hyqued3:763032004584538152 Banlanan Üye', `${user.tag} (${user.id})`)
  .addField('<a:hyqued3:763032004584538152 Banlayan Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('<a:hyqued3:763032004584538152 Ban Sebebi', "```" + reason + "```")
  modlog.send(embed);
  user.send(`\`${message.guild.name}\` **Adlı Sunucuda Yaptığınız Olumsuz Davranışlardan Dolayı Yasaklandınız** \n **Yetkilinin Girdiği Sebep:** \`${reason}\``)
  

  message.guild.members.ban(user, 2);
  
  const embed2 = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`<a:setting:750076062716788807> **Kullanıcı Başarıyla Banlandı**`)
  message.channel.send(embed2)

  
};

exports.config = {
  name: 'yasakla',
  aliases: ['ban','yasakla','banla']
};

