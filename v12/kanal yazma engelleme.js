client.on('message', message => {
  const kanal = ["kanal1", "kanal2"]//kanal id leri
  
  if(kanal.some(st => st === message.channel.id)){ //eğer o kanala bişey yazıldıysa
    message.delete()//o mesajı sil
  }
})