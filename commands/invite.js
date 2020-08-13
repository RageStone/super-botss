module.exports.run = async(client, message, args, RichEmbed) => {
//invite command
  const Embed = new RichEmbed()
  .setAuthor(' Requested By ' + message.author.tag, message.author.avatarURL )
  .setTitle("Click Here For My Invite:")
  .setURL("https://discord.com/api/oauth2/authorize?client_id=717731426312650864&permissions=8&scope=bot")
  .setTimestamp()
  .setFooter("SuperBot✨" );
		message.channel.send(Embed); 
	}
