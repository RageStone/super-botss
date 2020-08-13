module.exports = async (client, message, member, guild) => {
  const db = require("quick.db");
  if (message.channel.type === "dm")
    return console.log(message.author.tag + ": " + message.content);
  if (message.author.bot) return;
  const { RichEmbed } = require("discord.js");
  let prefix = (await db.fetch(`prefix_${message.guild.id}`))
    ? await db.fetch(`prefix_${message.guild.id}`)
    : "-";

  //message.channel.send(points)
  if (!message.content.startsWith(prefix)) return;
  console.log(
    message.guild.name + ": " + message.author.tag + ": " + message.content
  );
  if (message.author.bot) return;
  // commands/setprefix.js

  // Our standard argument/command name definition.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // Grab the command data from the client.commands Enmap
  const cmd = client.commands.get(command);

  // If that command doesn't exist, silently exit and do nothing
  let acmd;
  if (command === "") return;
  if (client.commands.has(command)) {
    acmd = client.commands.get(command);
  } else if (client.aliases && client.aliases.has(command)) {
    acmd = client.commands.get(client.aliases.get(command));
  }

  if (acmd) {
    acmd.run(client, message, args, RichEmbed);
  } else {
    return;
  }
  // Run the command
  //cmd.run(client, message, args, RichEmbed);
 
};
