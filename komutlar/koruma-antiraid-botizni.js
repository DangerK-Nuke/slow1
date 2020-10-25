const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  if (db.has(`antiraidK_${message.guild.id}`) === false) {
    return message.channel.send(
      "Anti-raid Açılmamış. Açmak İçin **s!anti-raid aç**"
    );
  }
  if (!args[1]) return message.reply(" <a:minikyanl:763031635532316694> Lütfen Bir Bot İd Si Girin");
 
  if (isNaN(args[1])) {
    return message.reply("Sadece ID");
  }
  if (args[0] == "ver") {
    client.users.get(args[0]);
    db.set(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " <a:minikdoru:763031811906732112> ID Li Bota İzin Verildi.");
  }
  if (args[0] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[1]}`, "aktif");
    message.reply(args[1] + " <a:minikdoru:763031811906732112> ID Li Botun İzni Kaldırıldı.");
  }
};
exports.config = {
  name: "bot-izni",
  aliases: []
};

 