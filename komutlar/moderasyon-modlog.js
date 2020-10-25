const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanabilmek İçin** "\`Yönetici\`" **Yetkisine Sahip Olmalısın.**`);

let TimsahTim_Log = message.mentions.channels.first();
let logkanal = await db.fetch(`log_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`<a:hyqued3:763032004584538152> **Modlog Kanalı Zaten Ayarlı Değil.**`);
    db.delete(`log_${message.guild.id}`)
   message.channel.send(`<a:hyqued3:763032004584538152> **ModLog Kanalı Başarıyla Sıfırlandı.**`);
  
    return
  }
  
if (!TimsahTim_Log) return message.channel.send(`<a:hypesquad1:750076071721828452> **Bir Modlog Kanalı Belirtmelisin.**`);

db.set(`log_${message.guild.id}`, TimsahTim_Log.id)

message.channel.send(`**Mod-Log kanalı Başarıyla ${TimsahTim_Log} Olarak Ayarlandı.**`);
 message.react('607634966959882250')

};

exports.config = {
    name: "modlog",
    aliases: ['mod-log','modlog','log-ayarlama','logayarla','log','vkanal','kayıtkanalı','d']
}