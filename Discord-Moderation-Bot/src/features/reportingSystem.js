const Discord = require('discord.js');

const reportingSystem = {
  init: function(client) {
    const prefix = '!'; // Change this to your bot's prefix
    const reportChannelId = '1234567890'; // Change this to the channel ID where reports should be sent

    client.on('message', async (message) => {
      if (message.content.startsWith(prefix + 'report')) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const reportedUser = message.mentions.members.first();
        const reason = args.slice(2).join(' ');

        if (!reportedUser) {
          return message.reply('Please mention the user you want to report.');
        }

        if (!reason) {
          return message.reply('Please provide a reason for the report.');
        }

        const reportEmbed = new Discord.MessageEmbed()
          .setColor('#ff0000')
          .setTitle('User Report')
          .addField('Reported User', reportedUser)
          .addField('Reported By', message.author)
          .addField('Reason', reason)
          .setTimestamp();

        const reportChannel = client.channels.cache.get(reportChannelId);
        if (reportChannel) {
          reportChannel.send(reportEmbed);
          message.reply('Your report has been submitted. Thank you for helping us keep the community safe.');
        } else {
          message.reply('Could not find the report channel. Please contact the server administrator.');
        }
      }
    });
  }
};

module.exports = reportingSystem;