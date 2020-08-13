const db = require('quick.db')
module.exports = {   
    run: async (client, message, args) => {
if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ");
if (!args[0]) return message.channel.send(':x:**Please type a vaild channel**:x:')
let channel = message.mentions.channels.first() || message.guild.channels.get(args[0]) || message.guild.channels.find(a => a.name.toLowerCase() === args.join(" ").toLowerCase());
if(!channel) return message.channel.send(":x:Invalid channel:x:.")
  let WelcomeChannel = db.set(`welcomeChannel_${message.guild.id}`, channel.id)
      message.channel.send(`:white_check_mark:The Welcome Channel Has Been Set to <#${WelcomeChannel}> For ` + "``" + message.guild.name + "``:white_check_mark:")
}
}