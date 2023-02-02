const { JsonDatabase } = require("wio.db") //bu xp sistemi için wio.db modülü gereklidir

client.on('message', message => {
  if(!message.guild) return;
  if(message.content.startsWith(`${prf}`)) return;// komutları saymicak
  if(message.author.bot) return;

  const lvl = new JsonDatabase('./system/level')//level yazılacak json
  const exp = new JsonDatabase('./system/xp') // xp yazılacak json

  var lvlupxp = lvl.get(message.author.id) * 50 //level atlamak için kaç xp gerekli
                                                // varsayılan: olan levelin * 50 si
                                                // örnek: level 1 olan kiçi için 1 * 50 yani 50 xp lazım
                                                // level 10 kişi için 10 * 50 500 xp lazım
  
  if(exp.get(message.author.id) === lvlupxp){ //eğer şuanki xp si level up için uygunsa
    
    var l = lvl.get(message.author.id)
    var need = lvlupxp
    const lvlup = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setThumbnail(message.author.displayAvatarURL({dynamic:true}))
      .setFooter("--> "+need+" Kadar Daha XP ye İhtiyacın var")
      .setTimestamp()
      .addField("-> ***Seviye Atlandı !***", `> ***Yeni Seviyen \`${l+1}\`***`)//NOT: l+1 eklememin sebebi daha atlamadan mesajın ayarlandığı için.
                                                                              // yani atlamadan önce gönedriyor sonra atliyor
    if(lvl.get(message.author.id) === 999) return; // eğer seviyesi 999 olduysa bişey yapma

    lvl.add(message.author.id, 1)// level database ine 1 ekle
    exp.set(message.author.id, 0)// xp yi 0 la

    
    //------XP-ROLE------//        Eğer Seviyesi Yetiyorsa Otomatik Rol Verir
    if(l === 10) message.member.roles.add(roles.dirt)
    if(l === 15) message.member.roles.add(roles.stone)
    if(l === 20) message.member.roles.add(roles.lava)
    if(l === 25) message.member.roles.add(roles.obsidian)
    if(l === 30) message.member.roles.add(roles.bedrock)
    if(l === 50) message.member.roles.add(roles.wl)
    if(l === 60) message.member.roles.add(roles.epic)
    if(l === 70) message.member.roles.add(roles.rare)
    if(l === 80) message.member.roles.add(roles.master)
    if(l === 90) message.member.roles.add(roles.legend)
    if(l === 100) message.member.roles.add(roles.king)
    if(l === 999) message.member.roles.add(roles.hacker)
    //------XP-ROLE------//

    return message.channel.send(lvlup)// Embed ı gönder

  }else{// eğer seviye atlamadıysa
    exp.add(message.author.id, 1) // xp sine 1 ekle
  }
})