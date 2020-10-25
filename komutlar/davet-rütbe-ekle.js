const Discord = require("discord.js"),
  db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`<a:hyqued3:763032004584538152> **Bu Komutu Kullanmak İçin "\`Yönetici\`" Yetkisine Sahip Olmalısın.**`);

  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "-";
  let TimsahTim_Veri = await db.fetch(`rol1_${message.guild.id}`);
  let TimsahTim_Veri_2 = await db.fetch(`rol2_${message.guild.id}`);
  let TimsahTim_Veri_12 = await db.fetch(`roldavet1_${message.guild.id}`)
  if (TimsahTim_Veri_2) {
    const embed = new Discord.MessageEmbed()
      .setDescription(`<a:minikyanl:763031635532316694> Zaten Maksimum Rütbe Sınırına Ulaşmışsınız!`)
      .setColor("BLUE")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    return;
  }
  if (!TimsahTim_Veri) {
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `<a:hyqued3:763032004584538152> Bir Rol Etiketleyin. \nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `<a:hyqued3:763032004584538152> Bir Davet Sayısı Belirtin.\nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `<a:minikdoru:763031811906732112> Başarılı Bir Şekilde ${sine} Rolü ${enis} Davet Karşılığında Elde Edilebilecek!`
      )
      .setColor("BLUE")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
    await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
    return;
  }
  else{
    let enis = args[1];
    let sine = message.mentions.roles.first();
    if (!sine) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `<a:hyqued3:763032004584538152> Bir Rol Etiketleyin.\nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    }
    if (!enis) {
      const embed = new Discord.MessageEmbed()
        .setDescription(
          `B<a:hyqued3:763032004584538152> Bir Davet Sayısı Belirtin.\nÖrnek: ${prefix}rütbe-ekle @Qral 5`
        )
        .setColor("BLUE")
        .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send(embed);
      return;
    }
    const embed = new Discord.MessageEmbed()
      .setDescription(
        `<a:minikdoru:763031811906732112> Başarılı Bir Şekilde ${sine} rolü ${enis} Davet Karşılığında Elde Edilebilecek!`
      )
      .setColor("BLUE")
      .setFooter(client.user.username, client.user.avatarURL);
    message.channel.send(embed);
if(enis < TimsahTim_Veri_12){
  let hhh = await db.fetch(`rol1_${message.guild.id}`)
  let sss = await db.fetch(`roldavet1_${message.guild.id}`)
  await db.set(`rol1_${message.guild.id}`, sine.id);
    await db.set(`roldavet1_${message.guild.id}`, enis);
await db.set(`rol2_${message.guild.id}`, hhh);
    await db.set(`roldavet2_${message.guild.id}`, sss);
  
    return
}else{
    await db.set(`rol2_${message.guild.id}`, sine.id);
    await db.set(`roldavet2_${message.guild.id}`, enis);
    return;
}
  }
};
exports.config = {
  name: "rütbe-ekle",
  aliases: ["davet-rütbe-ekle", "rütbeekle"]
};

