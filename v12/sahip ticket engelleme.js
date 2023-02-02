const staff = ["1", "2", "3"] //Sahip veya Yöneticilerin ID leri Buraya

client.on("message", message => {
  if(!message.guild) return; //DM de ise Cevap verme
  if(message.member.hasPermission('ADMINISTRATOR')) return; //Yönetici ise Cevap verme
  if(message.author.bot) return;//Bot ise Cevap verme

  let content = message.content.split(' '); //Gönderilen Mesajı Kelimelere Böl

  content.forEach(kelime => {//Her kelimeyi "kelime" ismini ata
    if(staff.some(st => st === kelime)){//eğer bir kelimede yönetici id si varsa

      message.delete()//mesajı sil
  
      const msg = new Discord.MessageEmbed() //embed oluştur
        .setTitle(`***YOUR ARE WARNED !***`)
        .setFooter(`AtaGalata Warn System`,client.user.displayAvatarURL({dynamic:true}))
        .setDescription(`> ***Sahibimi Ve Yöneticileri Etiketleme***`)

      client.users.cache.find(t => t.id == message.author.id).send(msg); //dm den uyarı mesajı gönder
    }
  })
})  