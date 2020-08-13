module.exports.run = async(client, message, args, RichEmbed) => {
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: You don't have permissions to use this command!:no_entry: ")
  if (!message.guild) return;
    const user = message.mentions.users.first();
    if (user) {  
      const member = message.guild.member(user);      
      if (member) {
        member
          .ban({
            reason: 'They were bad!',
          })
          .then(() => {
            message.reply(`Successfully banned ${user.tag}`);
          })
          .catch(err => {            
            message.reply('I was unable to ban the member');          
            console.error(err);
          });
      } else {        
        message.reply("That user isn't in this guild!");
      }
    } else {      
      message.reply("You didn't mention the user to ban!");
    }
  }

