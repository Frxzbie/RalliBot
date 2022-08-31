const fs = require("fs");
const Discord = require("discord.js");
const discord = require("discord.js");
const database = require('quick.db');
const ms = require('ms');
const moment = require('moment');
const db = require("croxydb")
const os = require('os')
const guildInvites = new Map();
const client = new discord.Client();
const disbut = require("discord-buttons");
require('discord-buttons')(client)
const ayarlar = require("./ayarlar.json");
require("./inlineReply") 

var prefix = ayarlar.prefix

const log = message => {
  console.log(` ${message}`);
};

require("./util/eventLoader.js")(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.on("ready", () => {
  client.user.setActivity(`u!yardım`);
});


client.login(ayarlar.token);

//////////////// Gelen Giden /////////////////////////////////////


client.on("guildMemberRemove", async member => {
  //let resimkanal = JSON.parse(fs.readFileSync("./ayarlar/gç.json", "utf8"));
  //const canvaskanal = member.guild.channels.cache.get(resimkanal[member.guild.id].resim);
  
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));
  if (!canvaskanal) return;

  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = [`\`${member.user.tag}\` Sunucudan Ayrıldı.`];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/Wrn1XW.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "ro-BOT-güle-güle.png"
  );

    canvaskanal.send(attachment);
    canvaskanal.send(
      msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
    );
    if (member.user.bot)
      return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
  
});

client.on("guildMemberAdd", async member => {
  if (db.has(`gçkanal_${member.guild.id}`) === false) return;
  var canvaskanal = member.guild.channels.cache.get(db.fetch(`gçkanal_${member.guild.id}`));

  if (!canvaskanal || canvaskanal ===  undefined) return;
  const request = require("node-superfetch");
  const Canvas = require("canvas"),
    Image = Canvas.Image,
    Font = Canvas.Font,
    path = require("path");

  var randomMsg = ["Sunucuya Katıldı."];
  var randomMsg_integer =
    randomMsg[Math.floor(Math.random() * randomMsg.length)];

  let paket = await db.fetch(`pakets_${member.id}`);
  let msj = await db.fetch(`cikisM_${member.guild.id}`);
  if (!msj) msj = `{uye}, ${randomMsg_integer}`;

  const canvas = Canvas.createCanvas(640, 360);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage(
    "https://i.hizliresim.com/UyVZ4f.jpg"
  );
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#74037b";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = `#D3D3D3`;
  ctx.font = `37px "Warsaw"`;
  ctx.textAlign = "center";
  ctx.fillText(`${member.user.username}`, 300, 342);

  let avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 }) ;
  const { body } = await request.get(avatarURL);
  const avatar = await Canvas.loadImage(body);

  ctx.beginPath();
  ctx.lineWidth = 4;
  ctx.fill();
  ctx.lineWidth = 4;
  ctx.arc(250 + 55, 55 + 55, 55, 0, 2 * Math.PI, false);
  ctx.clip();
  ctx.drawImage(avatar, 250, 55, 110, 110);

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "ro-BOT-hosgeldin.png"
  );

  canvaskanal.send(attachment);
  canvaskanal.send(
    msj.replace("{uye}", member).replace("{sunucu}", member.guild.name)
  );
  if (member.user.bot)
    return canvaskanal.send(`🤖 Bu bir bot, ${member.user.tag}`);
});

//////////////////////////// Sayaç ////////////////////////////////////////////

client.on("message", async message => {
  if (!message.guild) return;

  if (db.has(`sayac_${message.guild.id}`) === true) {
    if (db.fetch(`sayac_${message.guild.id}`) <= message.guild.members.cache.size) {
      const embed = new Discord.MessageEmbed()
        .setTitle(`Tebrikler ${message.guild.name}!`)
        .setDescription(`<a:RainbowiekGif:939938583693905920> Başarıyla \`${db.fetch(`sayac_${message.guild.id}`)}\` kullanıcıya ulaştık! Sayaç sıfırlandı!`)
        .setColor("RANDOM");
      message.channel.send(embed);
      message.guild.owner.send(embed);
      db.delete(`sayac_${message.guild.id}`);
    }
  }
});
client.on("guildMemberRemove", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:Girdi:939938569429069824> \`${member.user.tag}\` **Adlı Kullanıcı Sunucudan Ayrıldı,** \`${db.fetch(`sayac_${member.guild.id}`)}\` **Kullanıcı Olmaya** \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` **kullanıcı kaldı!**`);
});
client.on("guildMemberAdd", async member => {
  const channel = db.fetch(`sKanal_${member.guild.id}`);
  if (db.has(`sayac_${member.guild.id}`) == false) return;
  if (db.has(`sKanal_${member.guild.id}`) == false) return;

    member.guild.channels.cache.get(channel).send(`<a:kd:939938558951714858> \`${member.user.tag}\` **Adlı Kullanıcı Sunucuya Katıldı,** \`${db.fetch(`sayac_${member.guild.id}`)}\` **Kullanıcı Olmaya** \`${db.fetch(`sayac_${member.guild.id}`) - member.guild.memberCount}\` **kullanıcı kaldı!**`);
});

///////////////// Otorol //////////////////////

client.on("guildMemberAdd", async member => {
  const cdb = require("orio.db")
  
  let data = await cdb.get(`otorol_${member.guild.id}`)   
  let mesaj =  cdb.get(`otorolmesaj_${member.guild.id}`)  
  if(!data) return
  
  if(!mesaj) {
    
  client.channels.cache.get(data.kanal).send('<a:OnaylamakGif:939938580690767883> `'+member.user.tag+'` **adlı kullanıcı sunucuya katıldı!** `'+member.guild.roles.cache.get(data.rol).name+'` **adlı rol başarıyla verildi!**')
  member.roles.add(data.rol)
  
  return;
  } 
  
  if(mesaj) {
  
    var mesajs = mesaj
  .replace("-uye-", `${member.user.tag}`)
  .replace("-rol-", `${member.guild.roles.cache.get(data.rol).name}`)
  .replace("-server-", `${member.guild.name}`)
  .replace("-uyesayisi-", `${member.guild.memberCount}`)
  .replace("-botsayisi-", `${member.guild.members.cache.filter(m => m.user.bot).size}`)
  
    member.roles.add(data.rol)
    client.channels.cache.get(data.kanal).send(mesajs)
  
  }  
    
  });

////////////////////// Sa-As ///////////////////////////////

client.on('message', msg => {
  const cdb = require("croxydb")
    let a = cdb.get(`saas_${msg.guild.id}`)
    if (a == 'acik') {
    if (msg.content.toLowerCase() === 'sa') {
      msg.react('<:aleykumselam:939938589884710923>'),
      msg.reply('**Aleyküm Selam, Hoşgeldin**')
    }
    if (!a) return
  }});

////////// Oto Cevap ////////////////

client.on('message', async message => {
  if(message.author.bot) return
     let s = db.fetch(`ozelkomuts?`)
     if(!s) return;
     s.map(e => {
       if(message.content === e.komut) {
         message.channel.send(e.cevap)
       }
     })
}) 

///////////// GEÇİCİ ODA ///////////////////

client.on('voiceStateUpdate', async (oldState, newState) => {
  if (newState.channel != null && newState.channel.name.startsWith('➕│2 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(2);})}
  if (newState.channel != null && newState.channel.name.startsWith('➕│3 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(3);})}
if (newState.channel != null && newState.channel.name.startsWith('➕│4 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(4);})}
if (newState.channel != null && newState.channel.name.startsWith('➕│5 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(5);})}
if (newState.channel != null && newState.channel.name.startsWith('➕│15 Kişilik Oda')) {newState.guild.channels.create(`🎧 ${newState.member.displayName}`, {type: 'voice',
    parent: newState.channel.parent,})
   .then((cloneChannel) => {newState.setChannel(cloneChannel);
    cloneChannel.setUserLimit(15);})}
// Kullanıcı ses kanalından ayrılınca ve kanalda kimse kalmazsa kanalı siler;
if (oldState.channel != undefined) {
  if (oldState.channel.name.startsWith('🎧')) {
    if (oldState.channel.members.size == 0) {oldState.channel.delete();}
      else { // İlk kullanıcı ses kanalından ayrılınca kanaldaki başka kullanıcı adını kanal adı yapar.
        let matchMember = oldState.channel.members.find(x => `🎧 ${x.displayName} kanalı` == oldState.channel.name);
        if (matchMember == null) {
        oldState.channel.setName(`🎧 ${oldState.channel.members.random().displayName} kanalı`)
          }
       }
     }
   }
});

/////////////////////////////////////////////////////////

client.on("ready", async () => {
  let dc = require("discord.js")
  let csc = client.channels.cache.get("937838026061660250")
  setInterval(() => {
  let cse = new dc.MessageEmbed() 
  .setTitle("Umutsu Bot")
  .setColor("GREEN")
  .setTimestamp()
  .addField("Sunucular", client.guilds.cache.size)
  .addField("Kanallar", client.channels.cache.size)
  .addField("Kullanıcılar", client.users.cache.size)
  .setThumbnail(client.user.avatarURL())
  csc.send(cse)
  }, 91000000)
  })
 
  ///////////////////////////////////

    //////////////// Sunucu Panel ///////////////////////

    client.on("guildMemberAdd", async(member) => {
      const cdb = require("croxydb")
       let sunucupaneli = await cdb.fetch(`sunucupanel_${member.guild.id}`)
       if(sunucupaneli) {
         let rekoronline = await cdb.fetch(`panelrekor_${member.guild.id}`)
         let toplamuye = member.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
         let toplamaktif = member.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
         let botlar = member.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
         let rekoraktif = member.guild.channels.cache.find(x =>(x.name).startsWith("Rekor Aktiflik •"))
         let songelen =  member.guild.channels.cache.find(x =>(x.name).startsWith("Son Üye • "))
   
   
         if(member.guild.members.cache.filter(off => off.presence.status !== 'offline').size > rekoronline) {
           cdb.set(`panelrekor_${member.guild.id}`, member.guild.members.cache.filter(off => off.presence.status !== 'offline').size)
         }
         try{
           toplamuye.setName(`Toplam Üye • ${member.guild.members.cache.size}`)
           toplamaktif.setName(`Aktif Üye • ${member.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`)
           botlar.setName(`Botlar • ${member.guild.members.cache.filter(m => m.user.bot).size}`)
           rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
           songelen.setName(`Son Üye • ${member.user.username}`)
        } catch(e) { }
       }
     })
     client.on("guildMemberRemove", async(member) => {
          const cdb = require("croxydb")
       let sunucupaneli = await cdb.fetch(`sunucupanel_${member.guild.id}`)
       if(sunucupaneli) {
         let rekoronline = await cdb.fetch(`panelrekor_${member.guild.id}`)
         let toplamuye = member.guild.channels.cache.find(x =>(x.name).startsWith("Toplam Üye •"))
         let toplamaktif = member.guild.channels.cache.find(x =>(x.name).startsWith("Aktif Üye •"))
         let botlar = member.guild.channels.cache.find(x =>(x.name).startsWith("Botlar •"))
         let rekoraktif = member.guild.channels.cache.
         find(x =>(x.name).startsWith("Rekor Aktiflik •"))
   
         if(member.guild.members.cache.filter(off => off.presence.status !== 'offline').size > rekoronline) {
           cdb.set(`panelrekor_${member.guild.id}`, member.guild.members.cache.filter(off => off.presence.status !== 'offline').size)
         }
         try{
           toplamuye.setName(`Toplam Üye • ${member.guild.members.cache.size}`)
           toplamaktif.setName(`Aktif Üye • ${member.guild.members.cache.filter(off => off.presence.status !== 'offline').size}`)
           botlar.setName(`Botlar • ${member.guild.members.cache.filter(m => m.user.bot).size}`)
           rekoraktif.setName(`Rekor Aktiflik • ${rekoronline}`)
   
        } catch(e) { }
       }
     })
     
  
     
  //////////////////// Capslock Engel ///////////////////////////////
  
  client.on("message", async msg => {
    const cdb = require("croxydb")
      if (msg.channel.type === "dm") return;
      if (msg.author.bot) return;
      if (msg.content.length > 4) {
        if (cdb.get(`capslock_${msg.guild.id}`)) {
          let caps = msg.content.toUpperCase();
          if (msg.content == caps) {
            if (!msg.member.hasPermission("ADMINISTRATOR")) {
              if (!msg.mentions.users.first()) {
                msg.delete();
                return msg.channel
                  .send(`✋ Lütfen Büyük Harf Kullanma!`).then(msg => {
                    msg.delete({ timeout: 5000 });
                  })
              }
            }
          }
        }
      }
    });
  
    //////////////////////// Botu Sese Sokma ////////////////////////////////////////
  
    client.on("ready", async () => {
      let aroxVoice = client.channels.cache.get("848959254550544445");
      if (aroxVoice) aroxVoice.join().catch(err => console.error("Ayarladığınız ses kanalına bot bağlanamadı!"));
    });
  
    //////////////// NUKE ///////////////////
  
    client.on("ready", async () => {
      const cdb = require("croxydb")
        setInterval(() => {
          client.guilds.cache.map(m => {
            m.channels.cache.map(mr => {
              let csd = cdb.get(`csnuke.${mr.name}_${m.id}`);
              if (csd) {
                let time = Date.now() - csd.zaman;
                let sure = csd.sure;
                let csc = m.channels.cache.find(is => is.name === csd.kanal);
                if (csc) {
                  if (time >= sure) {
                    cdb.delete(`csnuke.${csd.kanal}_${m.id}`);
                    mr.delete();
      
                    let kategoriID = csc.parentID;
                    let position = csd.sıra;
                    if (csd.sıra == 0) {
                      position = 1;
                    }
      
                    csc.clone().then(async z => {
                      let chn = m.channels.cache.find(x => x.id === z.id);
                      if (kategoriID) {
                        chn.setParent(
                          m.channels.cache.find(s => s.id === kategoriID)
                        );
                      }
                      await chn.setPosition(position);
                    
                    console.log(csd);
                    cdb.set("csnuke." + csc.name + "_" + m.id, {
                      kanal: csc.name,
                      author: csd.author,
                      sure: csd.sure,
                      sıra: csd.sıra,
                      zaman: Date.now()
                    })
                         await chn.setPosition(position);
                    })
                  }
                }
              }
            });
          });
        }, 5000);
      });
  
  
      ////////////////////////// Anti Raid Bot Koruma ///////////////////

 
  
//////////////////////////////////////////////

  ////////////////////////////////

//KüfürEngel Baş

const küfür = [
  "GötüSikem",
  "göt",
  "piç",
  "pıc",
  "allahsikerim",
  "atatürksikerim",
  "siktir",
  "fuck",
  "puşt",
  "pust",
  "piç",
  "sikerim",
  "sik",
  "yarra",
  "yarrak",
  "amcık",
  "orospu",
  "orosbu",
  "orosbucocu",
  "oç",
  "OÇ",
  ".oc",
  "ibne",
  "yavşak",
  "bitch",
  "dalyarak",
  "amk",
  "AMK",
  "Amk",
  "AMCIK",
  "Sikkk",
  "sgg",
  "SG",
  "DALYARAK",
  "AMCIK",
  "awk",
  "a.w.k",
  "AWK",
  "A.W.K",
  "taşak",
  "taşşak",
  "daşşak",
  "sikm",
  "sikim",
  "sikmm",
  "skim",
  "skm",
  "sg"
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`küfür.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`küfür.${nev.member.guild.id}.kanal`);
    if (i) {
      if (küfür.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        const embed = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(
            ` ${nev.author} , **<a:Yasak:940399327854088222> Mesajını Editleyerek Küfür Etmeye Çalıştı!**`
          )
          .addField("Mesajı:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(
            ` ${nev.author} , **<a:Yasak:940399327854088222> Ben Bir Akılı Bir Botum Mesajı Editleyerek Küfür Etmene İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 10000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`küfür.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`küfür.${msg.member.guild.id}.durum`);
  if (i) {
    if (küfür.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 50 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setDescription(
              ` <@${msg.author.id}> , **<a:Yasak:940399327854088222> Bu sunucuda küfür yasak!**`
            );
          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setDescription(` ${msg.author} , **<a:Yasak:940399327854088222> Küfür etmeye çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//KüfürEngel Son

//Reklam Engel Baş

const reklam = [
  ".com",
  ".net",
  ".xyz",
  ".tk",
  ".pw",
  ".io",
  ".me",
  ".gg",
  "www.",
  "https",
  "http",
  ".gl",
  ".org",
  ".com.tr",
  ".biz",
  ".net",
  ".site",
  ".rf",
  ".gd",
  ".az",
  ".party",
  ".gf",
  ".31"
];
client.on("messageUpdate", async (old, nev) => {
  if (old.content != nev.content) {
    let i = await db.fetch(`reklam.${nev.member.guild.id}.durum`);
    let y = await db.fetch(`reklam.${nev.member.guild.id}.kanal`);
    if (i) {
      if (reklam.some(word => nev.content.includes(word))) {
        if (nev.member.hasPermission("BAN_MEMBERS")) return;
        //if (ayarlar.gelistiriciler.includes(nev.author.id)) return ;
        const embed = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(
            ` ${nev.author} , **<a:Yasak:940399327854088222> Mesajını editleyerek reklam yapmaya çalıştı!**`
          )
          .addField("Mesajı:", nev);

        nev.delete();
        const embeds = new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(
            ` ${nev.author} , **<a:Yasak:940399327854088222> Ben Bir Akılı Bir Botum Mesajı Editleyerek Reklam Yapamana İzin Veremem!**`
          );
        client.channels.cache.get(y).send(embed);
        nev.channel.send(embeds).then(msg => msg.delete({ timeout: 10000 }));
      }
    } else {
    }
    if (!i) return;
  }
});

client.on("message", async msg => {
  if (msg.author.bot) return;
  if (msg.channel.type === "dm") return;
  let y = await db.fetch(`reklam.${msg.member.guild.id}.kanal`);

  let i = await db.fetch(`reklam.${msg.member.guild.id}.durum`);
  if (i) {
    if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
      try {
        if (!msg.member.hasPermission("MANAGE_GUILD")) {
          //  if (!ayarlar.gelistiriciler.includes(msg.author.id)) return ;
          msg.delete({ timeout: 50 });
          const embeds = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setDescription(
              ` <@${msg.author.id}> , **<a:Yasak:940399327854088222> Bu sunucuda reklam yapmak yasak!**`
            );
          msg.channel.send(embeds).then(msg => msg.delete({ timeout: 5000 }));
          const embed = new Discord.MessageEmbed()
            .setColor("#00ff00")
            .setDescription(` ${msg.author} , **<a:Yasak:940399327854088222> Reklam yapmaya çalıştı!**`)
            .addField("Mesajı:", msg);
          client.channels.cache.get(y).send(embed);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  if (!i) return;
});

//Reklam Engel Son

//////////////////////// Bot Otorol ///////////////////////

client.on("guildMemberAdd", async member => {
  let cdb = require("orio.db")
  let veri = cdb.fetch(`csbo_${member.guild.id}`)  
  if (veri){
  if (member.user.bot) {
  let csr = member.guild.roles.cache.get(veri)
  if(csr){
  member.roles.add(csr)
  member.roles.remove()
  }}}
  })
  
////////////////////////////