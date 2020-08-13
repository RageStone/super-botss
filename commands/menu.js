module.exports.run = async(client, message, args, RichEmbed) => {
     const db = require('quick.db')
    var welcomecha = db.fetch(`welcomeChannel_${message.guild.id}`) ? db.fetch(`welcomeChannel_${message.guild.id}`) : '``No Welcome Channel Has Set Yet!``'
  var welcomemess = db.fetch(`welcomeMessage_${message.guild.id}`) ? db.fetch(`welcomeMessage_${message.guild.id}`) : 'No Welcome Message Has Set Yet!'
  var logcha = db.fetch(`logChannel_${message.guild.id}`) ? db.fetch(`logChannel_${message.guild.id}`) : '``No Log Channel Has Set Yet!``'
   var prefix = db.fetch(`prefix_${message.guild.id}`) ? db.fetch(`prefix_${message.guild.id}`) : '-'

  const embedpage1 = new RichEmbed()
  .setTitle('Click Here To Invite Me!')
  .addField('🤩 | Fun', "‏‎ ‎", true)
  .addField('🎫 | Ticket System', '‏‎ ‎', true)
  .addField('👮 | Moderation', '‏‎ ‎', true)
   .addField('⚙️ | Settings', '‏‎ ‎', true)
  .setDescription('SuperBot Menu:')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=717731426312650864&permissions=8&scope=bot')
  .setColor('#f20c10')
  .setFooter('SuperBot✨')
  
   const embedfun = new RichEmbed()
   embedfun.setTitle('Fun Commands: ')
    embedfun.addField('‏‏‎ ‎', "``" + 'avatar``' + ",``" + 'meme``' + ",``" + 'ping``' + ",``" +  'menu``, `userinfo`, `serverinfo`, `helpme`')
  .setColor('#6cd48f')
  
   const embedsetting = new RichEmbed()
   embedsetting.setTitle('Ticket Commands:')
   embedsetting.addField('‏‏‎ ‎', '`' + 'ticket`' + ',`' + 'close`' + ',`' + 'cleart`, `adduser`, `removeuser`')
   .setColor('#c5c7c6')
  
    const embedmod = new RichEmbed()
    embedmod.setTitle('Moderation Commands:')
    embedmod.addField('‏‏‎ ‎', ' ``kick``, ``ban``, ``clear``, ``setstaffrole``, ``roleall``, ``roleallr``, ``setup``, ``say``,`setlogchannel`, `setprefix`, `setwelcomechannel`, `setwelcomemessage`, `warn`, `warns`, `removewarn`, `tempmute`, `mute`, `unmute`')
   .setColor('#2f96a3')
  
  

  
  const embedsettings = new RichEmbed()
  embedsettings.setTitle('RageBot Settings: ')
  embedsettings.setThumbnail(message.guild.iconURL)
  embedsettings.setDescription(`Loging - \<\#${logcha}\>\nWelome Channel - \<\#${welcomecha}\>` + '\nWelcome Message - ``' + `${welcomemess}` + '``' + '\nPrefix - ``' + prefix + '``')
   embedsettings.setTimestamp()
  
  let pages = []
  let page = 1
  const embed = new RichEmbed()
  .setTitle('Click Here To Invite Me!')
  .addField('🤩 | Fun', "‏‎ ‎")
  .addField('🎫 | Ticket System', '‏‎ ‎', true)
  .addField('👮 | Moderation', '‏‎ ‎')
   .addField('⚙️ | Settings', '‏‎ ‎', true)
  .setDescription('SuperBot Menu:')
  .setURL('https://discord.com/api/oauth2/authorize?client_id=717731426312650864&permissions=8&scope=bot')
  .setColor('#f20c10')
  .setFooter('SuperBot✨')
  
  message.channel.send(embed).then(msg =>{
    msg.react('🤩').then(r => {
      msg.react('🎫').then(r =>{
        msg.react('👮').then(r =>{
          msg.react('⚙️').then(r => {
          msg.react('🔙')
      const funFilter = (reaction, user) => reaction.emoji.name === '🤩' && user.id === message.author.id
       const settingFilter = (reaction, user) => reaction.emoji.name === '🎫' && user.id === message.author.id
             const modFilter = (reaction, user) => reaction.emoji.name === '👮' && user.id === message.author.id
              const settingsFilter = (reaction, user) => reaction.emoji.name === '⚙️' && user.id === message.author.id

             const menuFilter = (reaction, user) => reaction.emoji.name === '🔙' && user.id === message.author.id
              
              
       const fun = msg.createReactionCollector(funFilter, {time: 60000})
        const setting = msg.createReactionCollector(settingFilter, {time: 60000})
         const mod = msg.createReactionCollector(modFilter, {time: 60000})
             const menu = msg.createReactionCollector(menuFilter, {time: 60000})
              const settings = msg.createReactionCollector(settingsFilter, {time: 60000})

        fun.on('collect', r=> {
          if(page === 0) return
          page++
          embed.setDescription(page[page-1])
          embed.setFooter(`Page ${page} of ${pages.length}`)
          msg.edit(embedfun)
        })
       setting.on('collect', r=> {
           if(page === 0) return
          page++
          embed.setDescription(page[page-2])
          embed.setFooter(`Page ${page} of ${pages.length}`)
          msg.edit(embedsetting)
          
        })
      mod.on('collect', r=> {
           if(page === 0) return
          page++
          embed.setFooter(`Page ${page} of ${pages.length}`)
          msg.edit(embedmod)
          
        })
    menu.on('collect', r=> {
           if(page === 0) return
          page--
          embed.setDescription(page[page-4])
          embed.setFooter(`Page ${page} of ${pages.length}`)
          msg.edit(embedpage1)
          
        })
   settings.on('collect', r=> {
          if(page === 0) return
          page++
          embed.setDescription(page[page-5])
          embed.setFooter(`Page ${page} of ${pages.length}`)
          msg.edit(embedsettings)
        })         
        
        })
        })
      })
    })
    
  })
}