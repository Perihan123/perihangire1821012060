var express = require('express');
var router = express.Router();

const anaSayfa=function(req,res,next){
 res.render('mekanlar-liste',{
     'baslik':'Anasayfa',
     'footer':'Perihan Gire 2020',
     'sayfaBaslik': {
         'siteAd':'Mekan32',
         'aciklama':'Isparta Civarındaki Mekanları Keşfedin!!'
     },
     'mekanlar':[
      {
         'ad':'Starbucks',
         'adres':'Centrum Garden AVM',
         'puan':3,
         'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
         'mesafe':'10 km'
     },
      {
          'ad':'Türk Kahvesi',//bura
          'adres':'Centrum Garden AVM',
          'puan':2,
          'imkanlar':['Türk Kahvesi','Tatlılar','Soğuk İçecekler'],
          'mesafe':'10.4 km'
      },
      {
          'ad':'La Case De',//bura
          'adres':'Fatih Mah.',
          'puan':3,
          'imkanlar':['Canlı Müzik','Tatlılar','Kahveler'],
          'mesafe':'19 km'
      },
      {
          'ad':'Burger King',
          'adres':'İyaş Park AVM',
          'puan':2,
          'imkanlar':['Hamburger','İçecekler','Dondurmalar'],
          'mesafe':'18 km'
      },
      {
          'ad':'Mudo',
          'adres':'Fatih Mah. İyaş Park AVM karşısı',
          'puan':5,
          'imkanlar':['Sıcak İçecekler','Oyunlar','Tatlılar'],
          'mesafe':'10.4 km'
      }
     ]
 });
}

const mekanBilgisi=function(req,res,next){
 res.render('mekan-detay',{
     'baslik':'Mekan Bilgisi',
      'footer':'Perihan Gire 2020', 
     'sayfaBaslik':'Starbucks',
     'mekanBilgisi':{
         'ad':'Starbucks',
         'adres':'Centrum Garden AVM',
         'puan':3,
         'imkanlar':['Dünya Kahveleri','Kekler','Pastalar'],
         'koordinatlar':{
             'enlem':'37.781835',
             'boylam':'30.566034'
         },
         'saatler':[
           {
             'gunler':'Pazartesi - Cuma ',
             'acilis':' 07:00 ',
             'kapanis':' 23:00 ',
             'kapali':false
           },
           {
             'gunler':'Cumartesi ',
             'acilis':' 09:00 ',
             'kapanis':' 22:00 ',
             'kapali':false

           },
           {
            'gunler':'Pazar ',
             'kapali':true

           }
         ],
         'yorumlar':[
            {
                 'yorumYapan':'Perihan Gire',
                 'puan':3,
                 'tarih': '02.12.2020',
                 'yorumMetni':'kahveler acıydı'
            },
            {
               'yorumYapan':'kamil çörekçi',
                 'puan':3,
                 'tarih': '27.11.2020',
                 'yorumMetni':'çok pahalı'
            }
         ]
        }
 });
}

const yorumEkle=function(req,res,next){
 res.render('yorum-ekle',{title:'Yorum Ekle'});
}
module.exports={
anaSayfa,
mekanBilgisi,
yorumEkle
}