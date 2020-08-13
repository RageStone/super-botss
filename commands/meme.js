const talkedRecently = new Set();
const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');
const usedCommandRecently = new Set()
module.exports = { 
    run: async (bot, message, args) => {
      if(usedCommandRecently.has(message.author.id)){
        message.reply('You Cannot Use That Command Just Yet! Wait another 30 seconds!');
      } else {
        
        let msg = await message.channel.send("Generating...")
        fetch("https://apis.duncte123.me/meme")
        .then(res => res.json()).then(body => {
            if(!body || !body.data.image) return message.reply(" whoops. I broke, try again!")
            let embed = new RichEmbed()
            .setAuthor(`here is your meme!`, message.guild.iconURL)
            .setImage(body.data.image)
            .setTimestamp()
           .setFooter("SuperBot✨\n Requested By " + message.author.tag, message.author.avatarURL );
            if(body.data.title) {
                embed.setTitle(body.data.title).setURL(body.data.url)
            }
                msg.edit(embed)
usedCommandRecently.add(message.author.id)
          setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
          }, 30000)
 
        })
    }
      }
        
  
}