const Discord = require('discord.js');
const request = require('request')
const TimsahTim =require("../ayarlar/bot.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Kanalları_Yönet\`" Yetkisine Sahip Olmalısın.**`);

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || TimsahTim.prefix 
if (message.channel.type !== "text") return;
const TimsahTim_Limit = args[0] ? args[0] : 0;
  if(!TimsahTim_Limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hyqued3:763032004584538152> **Doğru Kullanım:**   \`${prefix}yavaşmod [0/120]\``)
                .setColor("BLUE")
            message.channel.send({embed})
            return
          }
if (TimsahTim_Limit > 240) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("**Süre Limiti Maksimum** **240** **Saniye Olabilir.**").setColor("BLUE"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`<a:hyqued3:763032004584538152> **Yazma Süre Limiti** **${TimsahTim_Limit}** **Saniye Olarak Ayarlanmıştır**`).setColor("BLUE"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: TimsahTim_Limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.config = {
name: "yavaşmod",
aliases: ["slowmode", "yavaşmod"]
}