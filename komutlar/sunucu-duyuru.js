const Discord = require('discord.js');

 exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

   let TimsahTim_Mesaj = args.join(' ');

   let user = message.author.username

    const embedd = new Discord.MessageEmbed()

     .setDescription(`Duyuru Yapmak İçin Bir Metin Girmen Gerek!`);
   
   if (!TimsahTim_Mesaj) return message.channel.send(embedd).then(m => m.delete(5000));

     const embed = new Discord.MessageEmbed()

       .setColor("BLUE")
       .setThumbnail(client.user.avatarURL)
       .setTimestamp()
       .setFooter('Slowex', client.user.avatarURL)

       .addField(`**Slowex | Duyuru**`, `**${TimsahTim_Mesaj}**`)
   
     message.channel.send(embed).then(function(message) {

       });

     };

     exports.config = {
     name: 'duyuru',
     aliases: ['duyuru-yap']
};

