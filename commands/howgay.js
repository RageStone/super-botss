module.exports.run = async(client, message, args, RichEmbed) => {
  var member= message.mentions.members.first();
  
if(!member){
    var num = (Math.floor(Math.random() * 101))
   // if(message.author.id === '471977485232242708' || '663801812910080027') var num = '1' 
if(num >= '50') var hg1 = " You are gay"
if(num <= '50') var hg1 = " You are not gay"
       // if(message.author.id === '471977485232242708' || '663801812910080027') var hg1 = ' You will never be gay :)'
    const e = new RichEmbed()
    .setTitle("You Are " + num + '% Gay :rainbow_flag: ')
     .setDescription(hg1)
    .setFooter('Do not take this number seriously! Its Only A Joke!')
 message.channel.send(e);
} else {
  var num1 = (Math.floor(Math.random() * 101))
//if(member.user.id === '471977485232242708' || '663801812910080027') var num1 = '0'
if(num1 >= '50') var hg = member.user.username + " is gay"
if(num1 <= '50') var hg = member.user.username + " is not gay"
//  if(member.user.id === '471977485232242708' || '663801812910080027') var hg = ' He will never be gay :)'
  const e1 = new RichEmbed()
  .setTitle(member.user.username + ' Is ' + num1 + '% Gay :rainbow_flag:')
  .setDescription(hg)
     .setFooter('Do not take this number seriously! Its Only A Joke!')
   message.channel.send(e1)
}
  }
