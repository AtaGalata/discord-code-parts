client.on("message", async message => {//Eğer Bot Bir Mesaj Etkinliği Görürse
  if (message.author.id === client.user.id) return;// Kendisi Değilse
  if (message.guild) return;//Ve Sunucudan Yazılmamış İse
  client.channels.cache.get("1042071899695485058").send(//bu kanala  embed gönder
    new Discord.MessageEmbed()
      .setTitle("***DM'den Yazıldı !***")
      .setFooter("DM Log System")
      .setDescription(`**DM Gönderen:\n\n\`${message.author.tag}\`  |  \`${message.author.id}\`**`)
      .setTimestamp()
      .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
      .addField("Attığı Mesaj", message.content)
      .setColor("GREEN")
  );
});