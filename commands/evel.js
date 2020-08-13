const ownerid = ["471977485232242708", "237561686373040128"];
const { inspect } = require("util")
module.exports = {
run: async (client, message, args, RichEmbed) => {
    if(ownerid.includes(message.author.id.toString())) {
        try {
            let toEval = args.join(" ")
			let evaluated = inspect(eval(toEval, { depth: 0 }));          
            if (!toEval) {
                return message.channel.send(`Error while evaluating: \`air\``);
            } else {
                let hrStart = process.hrtime()
                let hrDiff;
                hrDiff = process.hrtime(hrStart);
              const embed = new RichEmbed()
              .addField("Input 📥", `\`\`\`javascript\n${message.content.split("eval ")[1]}\n\`\`\``) 
              .addField("Output 📤", `\`\`\`javascript\n${evaluated}\n\`\`\``)
              .setFooter(`Executed in ${hrDiff[0] > 0 ? `${hrDiff[0]}s ` : ''}${hrDiff[1] / 1000000}ms.`);
              message.channel.send(embed)
            }
        } catch (e) {
            return message.channel.send(`Error while evaluating: \`${e.message}\``);
        }

      } else {
        return message.reply(" You are not the bot owner!").then(msg => msg.delete(5000))
      }
    }
}