module.exports.run = async(client, message, args, RichEmbed) => {
//clear command
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ")
if (!args[0]) message.channel.bulkDelete(99)
if (args[0] > 99) return message.channel.send('**Please type a number less the 100**')
message.channel.bulkDelete(args[0])
 
message.channel.send('✂ ' + '``' + args[0] + '``' + ' messages')
  
        
}
