const Discord = require('discord.js');

exports.run = (client, message, args) => {
     if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu komutu kullanabilmek için "\`Üyeleri Yasakla\`" yetkisine sahip olmalısın.**`);

	if (!message.guild) return message.author.send('<a:hyqued3:763032004584538152> **Bu Komutu Sunucuda Kulanabilirsiniz**');

    let kullanici = args[0];
    if (!kullanici) return message.channel.send("<a:hyqued3:763032004584538152> **Banlanan Bir kullanıcının ID'sini belirtmen gerek**")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<<a:hyqued3:763032004584538152> **Bu kullanıcı banlanmamış.**`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {

const Embed = new Discord.MessageEmbed()
 .setColor('BLUE')
.setAuthor('Pirate | Ban Sorgulama', client.user.avatarURL())
.setDescription(`<a:hyqued3:763032004584538152> ${user.tag} **Adlı Kullanıcının Ban Nedeni:** \n\n**${reason || "Neden Belirtilmemiş"}**`)
message.channel.send(Embed)
    })
    }

exports.config = {
    name: 'bansorgulama',

    aliases: ['bansorgu','ban-sorgulama','ban-sorgu']
};


