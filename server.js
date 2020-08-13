// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
const ydtl =require("ytdl-core");
const Discord = require('discord.js')
const Enmap = require("enmap");
const fs = require("fs");
const moment = require('moment')
const Canvas = require('canvas');

// our default array of dreams

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
const http = require('http');
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
//app.listen(process.env.PORT);
//setInterval(() => {
 // http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
//}, 280000);
// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
const {Client, RichEmbed} = require("discord.js");
const client = new Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

//status event
client.on('ready', () => {
  console.log('I am ready with ' +  client.user.tag + '!');
 //client.user.setActivity(client.users.size + " users in " + client.guilds.size  + " servers!", {type: 'WATCHING'} );
const s = [client.users.size + " users", client.guilds.size  + " servers!"]
setInterval(() => {
  let act = [Math.floor(Math.random() * s.length)]
  client.user.setActivity("-menu | " +s[act], {type: 'WATCHING'})
}, 5000)
  const e = new RichEmbed()
  .setTitle("i am online!")
  .setTimestamp()
  client.channels.get('722902685170270249').send(e)
});

const db = require('quick.db')
//leave event1
/*client.on('guildMemberAdd', member => {
     run: async (bot, message, args) => {
  const Embed = new RichEmbed()
 .setTitle(member.name + ' welcome to ' + member.guild)
  let channel = await db.fetch(`welcomeChannel_${member.guild.id}`)
  member.guild.channels.get(channel).send(Embed)
}})*/



client.on('guildMemberAdd', async(member) => {
     let content = db.fetch(`welcomeMessage_${member.guild.id}`)
      let channel = await db.fetch(`welcomeChannel_${member.guild.id}`) 
      if(!channel) return
          const joinDiscord = moment(member.user.createdAt).format('llll');
  const embed1 = new RichEmbed()
.setTitle('Hello **' + member.user.username + '**')
.setDescription('Welcome To ' + member.guild.name)
.addField('**Now We Have** ', member.guild.members.size + ' Members!')
.addField("**Account Created On:**", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY")}`) 
//.addField('Invited By ' + inviter.tag)
.addField('**Have Fun!**', '‏‏‎ ‎')
  .setThumbnail(member.user.displayAvatarURL)
.setColor('RANDOM')
.setFooter('SuperBot✨')
member.guild.channels.get(channel).send(embed1)
//member.guild.channels.get(channel).send(`${member.user.tag} joined \n from ${inviter.tag}. Invite was used ${invite.uses} times since its creation.`)
      //console.log("age: " + moment(member.user.createdAt).format('lll') + '\n*' + moment(new Date()).diff(member.user.createdAt, 'days') + ' days ago*');
  //if(moment(new Date()).diff(member.user.createdAt, 'days') < 1) member.kick('Alt')
  //member.send('You Kicked From ' + member.guild + ' Becouse You caught alting')
})
client.on('guildMemberRemove', async(member) => { 
 let channel = await db.fetch(`welcomeChannel_${member.guild.id}`) 
 if(!channel) return
 const embed2 = new RichEmbed()
 .setTitle(member.user.tag + ' Just Left The Server ')
 .addField('Joined At ' + `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, '‏‏‎ ‎')
 .addField('We Will Miss You :( ', '‏‏‎ ‎')
 .setThumbnail(member.user.displayAvatarURL)
 .setColor('RANDOM')
.setFooter('SuperBot✨')
  member.guild.channels.get(channel).send(embed2)
}) 



client.on('guildMemberAdd', member => { 
let channel = db.fetch(`countchannel_${member.guild.id}`) 
if(!channel) return
  client.channels.get(channel).setName("Members: " + member.guild.members.size)
    let channel1 = db.fetch(`countchannelNoBots_${member.guild.id}`)
  client.channels.get(channel1).setName(`Users: ${member.guild.members.filter(member => !member.user.bot).size}`)
}) 
client.on('guildMemberRemove', member => { 
let channel = db.fetch(`countchannel_${member.guild.id}`) 
if(!channel) return
  client.channels.get(channel).setName("Members: " + member.guild.members.size)
  let channel1 = db.fetch(`countchannelNoBots_${member.guild.id}`)
if(!channel1) return
  client.channels.get(channel1).setName(`Users: ${member.guild.members.filter(member => !member.user.bot).size}`)
}) 

client.on('guildMemberAdd', member => { 
     client.user.setActivity(client.users.size + " users in " + client.guilds.size  + " servers!", {type: 'WATCHING'} );
})
    
  




/*client.on('message', message => {
  var automod = db.fetch(`autoMod_${message.guild.id}`)
 if(!automod || automod != "on") return;
   let LogChannel = db.fetch(`logChannel_${message.guild.id}`)
   if(!LogChannel) return
   if(message.author.bot) return;
  if (message.content.includes("discord.gg/")) {
    const embed = new RichEmbed()
    message.delete()
    embed.setAuthor('Link Sended:', message.author.avatarURL)
    .setDescription('``' + message.author.tag +'`` has sent a invite link in\nChannel: ' + message.channel)
    embed.addField('Link:', message.content)
    client.channels.get(LogChannel).send(embed)
  message.channel.send('Discord Invite Links Are Not Allowed Here') 
  } else {
     if (message.content.includes("https://")) {
       if(message.author.bot) return;
       message.delete()
       const e = new RichEmbed()
       e.setAuthor('Link Sended:', message.author.avatarURL)
    .setDescription('``' + message.author.tag +'`` has sent a link in\nChannel: ' + message.channel)
    e.addField('Link:', message.content)
    client.channels.get(LogChannel).send(e)
       message.channel.send(message.author + ' Links are not allowed here!')
//        client.channels.get(LogChannel).send('``' + message.author.tag +'`` has sent a link in\nChannel: ' + message.channel)  
     }}})*/


client.on('messageDelete', message => {
   let LogChannel = db.fetch(`logChannel_${message.guild.id}`)
   if(!LogChannel) return
   if(message.author.bot) return;
  const embed1 = new RichEmbed()
  .setAuthor(message.author.tag + ' has deleted a message', message.author.avatarURL)
  .setTitle('Content: `' + message.content + '`')
  .setDescription('Channel: ' + message.channel)
    .setColor('RANDOM')
   .setTimestamp()
  .setFooter("SuperBot✨");
 client.channels.get(LogChannel).send(embed1)
  }
);
client.on('channelCreate', async(channel) => {
let LogChannel = db.fetch(`logChannel_${channel.guild.id}`)
if(!LogChannel) return
const embed = new RichEmbed()
.setAuthor(channel.guild.name, channel.guild.iconURL)
.setTitle('New channel just Created!')
.setDescription('Channel: ' + channel)
.addField('Created At: ', moment.utc(new Date(channel.createdAt)).format("dddd, MMMM Do YYYY"))
.addField('Channel Type: ', channel.type)
.addField('Channel Position: ', channel.position)
.setColor('RANDOM')
.setTimestamp()
.setFooter('SuperBot✨')
 client.channels.get(LogChannel).send(embed)
})
client.on('channelDelete', async(channel) => {
let LogChannel = db.fetch(`logChannel_${channel.guild.id}`) 
if(!LogChannel) return
const embed = new RichEmbed()
.setAuthor(channel.guild.name, channel.guild.iconURL)
.setTitle(' A channel just Deleted!!')
.setDescription('Channel name: ``' + channel.name + '``')
.addField('Created At: ', moment.utc(new Date(channel.createdAt)).format("dddd, MMMM Do YYYY"))
.addField('Channel Type: ', channel.type)
.addField('Channel Position: ', channel.position)
.setColor('RANDOM')
.setTimestamp()
.setFooter('SuperBot✨')
 client.channels.get(LogChannel).send(embed)
})



client.on('roleCreate', async(role) => {
  let LogChannel = db.fetch(`logChannel_${role.guild.id}`) 
  if(!LogChannel) return
let msg = await client.channels.get(LogChannel).send('Searching...')   
  const embed = new RichEmbed()
  .setAuthor(role.guild.name, role.guild.iconURL)
  .setTitle(' A  New role just Created!')
.setDescription('Role: ' + role)
.addField('Created At: ', moment.utc(new Date(role.createdAt)).format("dddd, MMMM Do YYYY"))
.addField('Role Position: ', role.position)
.setColor('RANDOM')
  .setTimestamp()
.setFooter('SuperBot✨')
  await msg.edit(embed)
})
client.on('roleDelete', async(role) => {
  let LogChannel = db.fetch(`logChannel_${role.guild.id}`) 
  if(!LogChannel) return
let msg = await client.channels.get(LogChannel).send('Searching...')   
  const embed = new RichEmbed()
  .setAuthor(role.guild.name, role.guild.iconURL)
  .setTitle(' role just Deleted!')
.setDescription('Role name: ``' + role.name + '``')
.addField('Created At: ', moment.utc(new Date(role.createdAt)).format("dddd, MMMM Do YYYY"))
.addField('Role Position: ', role.position)
.setColor('RANDOM')
  .setTimestamp()
.setFooter('SuperBot✨')
  await msg.edit(embed)
})

/*client.on('userUpdate', async(oldUser, newUser) => {
  //let LogChannel = db.fetch(`logChannel_${oldUser.guild.id}`) 
  const embed = new RichEmbed()
  .setAuthor(oldUser.guild.name, oldUser.guild.iconURL)
  .setTitle(' role just Deleted!')
.setDescription('User: ' + oldUser)
.addField('changes: ', oldUser + ' => ' + newUser)
.setColor('RANDOM')
.setTimestamp()
.setFooter('SuperBot✨')
  client.channels.get('706414801244389427').send(embed)   
})*/
client.on('message', msg => {
  if (msg.content === 'prefix') {
    let prefix = db.fetch(`prefix_${msg.guild.id}`)
  msg.channel.send('My Prefix For ``' + msg.guild + "`` Is ``" + prefix + '``') 
  }
});


client.on('message', message => {
  const ownerid = "471977485232242708"
  if(message.author.id == ownerid) {
  if(message.content === 'log'){  
    message.delete()
  message.guild.fetchAuditLogs()
  .then(audit => console.log(audit.entries.first()))
  .catch(console.error);
}}})







client.login(process.env.TOKEN)