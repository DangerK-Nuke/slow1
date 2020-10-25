const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

   return;
  }
  let TimsahTim = message.mentions.users.first();
  if (!TimsahTim) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Tüm Daveti Sıfırlanacak Şahısı Etiketleyin!")
        .setColor("BLUE")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }
  const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setDescription(
      `${TimsahTim} Adlı Şahısın Davetlerinin Sıfırlanmasını Onaylıyormusunuz ?`
    )
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed).then(async function(sentEmbed) {
    const emojiArray = ["☑️"];
    const filter = (reaction, user) =>
      emojiArray.includes(reaction.emoji.name) && user.id === message.author.id;
    await sentEmbed.react(emojiArray[0]).catch(function() {});
    var reactions = sentEmbed.createReactionCollector(filter, {
      time: 30000
    });
    reactions.on("end", () => sentEmbed.edit("Davet Sıfırlama İşlemi İptal Edildi!"));
    reactions.on("collect", async function(reaction) {
      if (reaction.emoji.name === "☑️") {
        message.channel.send(
          `İşlem Onaylandı! ${TimsahTim} Adlı Şahısın Tüm Davetleri Sıfırlandı!`
        );
        db.delete(`davet_${TimsahTim.id}_${message.guild.id}`);
      }
    });
  });
};
module.exports.config = {
  name: "davet-sıfırla",
  aliases: ["davetsıfırla"]
};

