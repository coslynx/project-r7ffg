const Discord = require('discord.js');

module.exports = {
    name: 'warn',
    description: 'Warn a user for their behavior.',
    execute(message, args) {
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('You do not have permission to use this command.');

        const user = message.mentions.users.first();
        if (user) {
            const member = message.guild.member(user);
            if (member) {
                member.send('You have been warned for your behavior. Please adhere to the server rules.');
                message.channel.send(`${user.tag} has been warned.`);
            } else {
                message.reply('That user is not in this server.');
            }
        } else {
            message.reply('You need to mention a user to warn them.');
        }
    },
};