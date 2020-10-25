const Discord = require("discord.js");
const db = require("quick.db");
exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);
  if (args[0] == "aç") {
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send(" <a:minikdoru:763031811906732112> Anti-Raid Zaten Açılmış.");
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply(" <a:minikdoru:763031811906732112> Anti-Raid Sistemi Başarıyla Açıldı");
  }
 
  if (args[0] == "kapat") {
    if (db.has(`antiraidK_${message.guild.id}`) === false) {
      return message.channel.send(
        " <a:minikyanl:763031635532316694> Anti-Raid Açılmamış. Açmak İçin **-Anti-Raid Aç**"
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");
    message.reply(" <a:minikdoru:763031811906732112> Anti-Raid Sistemi Başarıyla Kapatıldı");
  }
  if (!args[0])
    return message.reply(
      " <a:minikyanl:763031635532316694> Lütfen Geçerli İşlem  Girin. Örnek: **Anti-Raid Aç/Kapat**"
    );
};
exports.config = {
  name: "anti-raid",
  aliases: []
};

 