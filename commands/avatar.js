module.exports.run = async(client, message, args, RichEmbed) => {
//avatar command
  message.delete()
  var member= message.mentions.members.first();
  if(!member) {
    let embed = new RichEmbed()
  .setTitle("**here is your avatar:**")
  .setImage(message.author.avatarURL)
  .setColor('#275BF0')
  .setTimestamp()
  .setFooter("SuperBot✨\n Requested By " + message.author.tag, "https://cdn.glitch.com/43ef771d-accf-41dc-a1c4-4ffc8c758c7c%2F123-1236073_right-arrow-of-straight-lines-right-arrow-line.png?v=1585315269861")
      message.channel.send(embed)    
  } else {
    let embed = new RichEmbed()
  .setTitle('Here Is ' + member.tag + '`s avatar ')
  .setImage(member.user.displayAvatarURL)
  .setColor('#275BF0')
  .setTimestamp()
  .setFooter("SuperBot✨\n Requested By " + message.author.tag, "https://cdn.glitch.com/43ef771d-accf-41dc-a1c4-4ffc8c758c7c%2F123-1236073_right-arrow-of-straight-lines-right-arrow-line.png?v=1585315269861")
    message.channel.send(embed) 
  }
}