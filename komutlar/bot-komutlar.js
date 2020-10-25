const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle(`Slowex | Komut Sayısı`)
    .setDescription('**\n Slowex | Toplam**  **`' + client.commands.size + '`** **Komut Vardır!**')
    .setColor("BLUE")
    .setThumbnail('https://cdn.discordapp.com/attachments/568831784024801316/764403158037299220/Slowex.png')
    .setTimestamp()
    .setFooter("Slowex | Gelişmiş Türkçe Bot | 2020" , client.user.avatarURL())

    return message.channel.send(embed);
    
};

exports.config = {
  name: 'komutlar',
  aliases: ['komut-sayısı']
};

