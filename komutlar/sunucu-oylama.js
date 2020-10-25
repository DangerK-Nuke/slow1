const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);


   let TimsahTim_Mesaj = args.join(' ');

   let user = message.author.username
     const embedd = new Discord.MessageEmbed()

     .addField(`Oylama Yapmak İçin Metin Girmen Gerek!`);
   
   if (!TimsahTim_Mesaj) return message.channel.send(embedd).then(m => m.delete(5000)); 

       const embed = new Discord.MessageEmbed()

       .setColor("BLUE")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Slowex', client.user.avatarURL)

       .addField(`**Slowex  | Oylama**`, `**${TimsahTim_Mesaj}**`);
   
     message.channel.send(embed).then(function(message) {

         message.react('👍🏻');

         message.react('👎🏻');

       });

     };

exports.config = {
name: "oylama",
aliases: ["oylama-yap"]
};

