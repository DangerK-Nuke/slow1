
const Discord = require('discord.js')
const moment = require('moment')
const client = new Discord.Client();

const botadi = "Slowex"

exports.run = async (bot, msg, args) => {

        let simdikitarih = moment.utc(msg.createdAt).format('DD MM YYYY');
  
        let user = msg.mentions.users.first() || msg.author;
  
        let userinfo = {};
        userinfo.avatar= user.avatarURL();
        userinfo.id = user.id;
        userinfo.od1 = msg.guild.members.cache.get(user.id).user.presence.game || "Oynadığı Bir Oyun Yok"
        userinfo.status = user.presence.status.toString()
        .replace("dnd", `<:760133277578166295:763003037429661698>  | **Rahatsız Etmeyin**`)
        .replace("online", `<:760133252517724170:763003005187784724>  | **Çevrimiçi**`)
        .replace("idle", `<:760133266975621210:763003021872463904>  | **Boşta**`)
        .replace("offline", `<:760133320909651998:763003082408722502>  | **Çevrimdışı**`)

        userinfo.bot = user.bot.toString()
        .replace("false", `<a:minikyanl:763031635532316694> Hayır`)
        .replace("true", `<a:minikdoru:763031811906732112> Evet`)

        userinfo.sonmesaj = user.lastMessage || "Son Yazılan Mesaj Bulunamadı." || "Son Yazılan Mesaj Gösterilemedi."
  
        userinfo.dctarih = moment.utc(msg.guild.members.cache.get(user.id).user.createdAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')

        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
        userinfo.dctarihkatilma = moment.utc(msg.guild.members.cache.get(user.id).joinedAt).format('**YYYY** [Yılında] MMMM [Ayında] dddd [Gününde] (**DD/MM/YYYY**)')
        .replace("Monday", `**Pazartesi**`)
        .replace("Tuesday", `**Salı**`)
        .replace("Wednesday", `**Çarşamba**`)
        .replace("Thursday", `**Perşembe**`)
        .replace("Friday", `**Cuma**`)
        .replace("Saturday", `**Cumartesi**`)
        .replace("Sunday", `**Pazar**`)

        .replace("January", `**Ocak**`)
        .replace("February", `**Şubat**`)
        .replace("March", `**Mart**`)
        .replace("April", `**Nisan**`)
        .replace("May", `**Mayıs**`)
        .replace("June", `**Haziran**`)
        .replace("July", `**Temmuz**`)
        .replace("August", `**Ağustos**`)
        .replace("September", `**Eylül**`)
        .replace("October", `**Ekim**`)
        .replace("November", `**Kasım**`)
        .replace("December", `**Aralık**`)
 
        const uembed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail('https://cdn.discordapp.com/attachments/568831784024801316/764403158037299220/Slowex.png')
        .setTitle('Kullanıcı Hakkında Bilgiler')
        .addField(`<a:760146789877153832:763032006699253800> Durum`, userinfo.status, false)
        .setColor('BLUE')
        .addField(`<a:760136735132352553:763031732680654878> Katılım Tarihi (Sunucu)`, userinfo.dctarihkatilma, false)
        .addField(`<a:760136735132352553:763031732680654878> Katılım Tarihi (Discord)`, userinfo.dctarih, false)
        .addField(`<a:760133335447240735:763031713345175554> Kimlik`, userinfo.id, true)
        .addField(`<a:760136651954454598:763031786443767819> Bot mu?`, userinfo.bot, true)
        .setFooter(`Slowex | Kullanıcı Bilgi Sistemi`)
        msg.channel.send(uembed)
    }

exports.config = {
  name: 'profil',
  aliases: ["kullanıcı-bilgi"]
};



