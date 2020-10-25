const Discord = require("discord.js")
const fs = require("fs")
const db = require("quick.db");
const ayarlar = require("../ayarlar/bot.json");

exports.run = async (client, message, args) => {
  	let p = db.fetch(`prefix.${message.guild.id}`) || ayarlar.prefix;

const embed = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor(`Slowex | Bağlantılar`, client.user.avatarURL())
.setDescription('**<a:760133335447240735:763031713345175554> • [ Slowex`i Ekleyin ](https://discord.com/oauth2/authorize?client_id=766383975332708393&scope=bot&permissions=805314750)**\n\n**<a:760133335447240735:763031713345175554> • [ Slowex Web Sitesi ](https://timsahtim.com/)**\n\n**<a:760133335447240735:763031713345175554> • [ Slowex Destek Sunucusu ](https://discord.gg/KYaqshk)**')
.setFooter(`${message.author.username} Tarafından İstendi.`) 
.setTimestamp()
.setThumbnail(client.user.avatarURL())
message.channel.send(embed)   
 };

 exports.config = {
      name: 'davet',
   aliases: ["invitation","site"]
 };