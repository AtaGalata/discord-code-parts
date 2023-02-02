///////////////////////////////////////////////////
//----------- Komut Dosyasına Atılcak
///////////////////////////////////////////////////
const disbut = require('discord-buttons')//Buton Eklemek İçin discord-buttons modülü gereklidir
disbut(client);

let button = new disbut.MessageButton()//Buton 1
.setStyle('green')//Stili Veya Rengi
.setLabel('buton1')//Butonun Üzerinde Yazıcak Yazı
.setID('click_to_function') //buton ID si

let button2 = new disbut.MessageButton()
.setStyle('green')
.setLabel('buton2') 
.setID('click_to_function2')   

message.channel.send('bu bir deneme butonlu mesaj', {
    buttons:[//Butonları gönderilen Mesaja Ek Olarak Eklememiz Gerekiyor
        button,button2
    ]
});

///////////////////////////////////////////////////
//----------- Ana Dosya'ya Atılcak
///////////////////////////////////////////////////

client.on('clickButton', async (button) => {//eğer bir tuşa basılırsa
  if (button.id === 'click_to_function') { //o tuş şu id se
    button.channel.send("Test Mesajı 1."); //bu mesajı gönder(yada bişey yaptırabilirsiniz)
  }
  if (button.id === 'click_to_function2') {//o tuş bu id se
    button.channel.send("Test Mesajı 2.");//bu mesajı gönder(yada bişey yaptırabilirsiniz)
  }
});