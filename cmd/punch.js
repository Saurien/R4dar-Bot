//Saurien is a easy usage discord bot
//This file updated in 05.05.2019
//by Radiaction

const Discord = require('discord.js');

exports.run = (Saurien, message, args) => {
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.sendMessage('[:x:] | **You must write whom I will punch**');
    }
    var punch = new Discord.RichEmbed()
      .setTitle("Someone Punched")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** Punched the "+"**"+member+"**")
      .setImage("https://media.giphy.com/media/9vAHtLuL0FU1a/source.gif");

    message.channel.sendEmbed(punch);
  };

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'punch'
};
