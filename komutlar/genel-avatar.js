const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let TimsahTim_Kullanıcı = message.mentions.users.first() || message.author
 let TimsahTim_Profil = new Discord.MessageEmbed()
  
  .setImage(TimsahTim_Kullanıcı.avatarURL())
  
  message.channel.send(TimsahTim_Profil)
  
  };
exports.config = {
name: "avatar",
aliases: [""]
}
