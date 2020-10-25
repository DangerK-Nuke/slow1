  module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  let reason = args.slice(1).join(" ");
  let user = message.mentions.users.first();
  if (reason.length < 1)
    return message.reply("Ban Sebebini Yazmalısın.").then(m => m.delete(3000));
  if (message.mentions.users.size < 1)
    return message
      .reply("Kimi Banlayacağını Yazmalısın.")
      .catch(console.error)
      .then(m => m.delete(3000));
  if (!message.guild.member(user).bannable)
    return message.reply("Yetkilileri Banlayamam.").then(m => m.delete(3000));
  var fetched = await message.channel.fetchMessages({ limit: 99 });
  if (user) {
    var fetched = fetched
      .filter(m => m.author.id === user.id)
      .array()
      .slice(0, 99);
  }
  message.channel.bulkDelete(fetched);
  message.guild.ban(user, 2);
  message.channel
    .send(
      `${user} Kullanıcısının Son 99 Mesajını Temizleyerek \`${reason}\` Sebebi İle Banladım!`
    )
    .then(m => m.delete(3000))
    .catch(error =>
      message.channel.send(" <a:minikyanl:763031635532316694> 14 Günden Önceki Mesajlar Silinmemektedir!")
    )
    .then(m => m.delete(3000));
};
exports.config = {
  name: "soft-ban",
  aliases: ["softban"]
};


