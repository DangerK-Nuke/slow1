const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152>  **Bu Komutu Kullanabilmek İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

  let prefix = (await db.fetch(`prefix.${message.guild.id}`)) || "-";


  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Rol Koruma Sistemi!")
      .setDescription(
        "<a:minikyanl:763031635532316694> **Hatalı Kullanım! Örnek: ${prefix}Rol-Koruma Aç && Kapat**"
      );

    message.channel.send(embed);
    return;
  }
  let TimsahTim_Rol = await db.fetch(`rolk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (TimsahTim_Rol) {
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Rol Koruma Sistemi!")
        .setDescription("<a:minikdoru:763031811906732112> **Görünüşe Göre Rol Koruma Zaten Aktif.**");

      message.channel.send(embed);
      return;
    } else {
      db.set(`rolk_${message.guild.id}`, "acik");
      const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Rol Koruma Sistemi!")
        .setDescription("<a:minikdoru:763031811906732112> **Rol Koruma Başarıyla Açıldı.**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`rolk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("BLUE")
      .setTitle("Rol Koruma Sistemi!")
      .setDescription("<a:minikdoru:763031811906732112> **Rol Koruma Başarıyla Kapandı.**");

    message.channel.send(embed);
  }
};
exports.config = {
  name: "koruma-rol",
  aliases: ["koruma-rol"]
};
