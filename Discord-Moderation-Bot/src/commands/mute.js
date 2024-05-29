const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'Mute a user in the server',
    execute(message, args) {
        if (!message.member.hasPermission('MANAGE_MESSAGES')) {
            return message.reply('You do not have permission to use this command');
        }

        const target = message.mentions.users.first();
        if (target) {
            let mainRole = message.guild.roles.cache.find(role => role.name === 'member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');

            let memberTarget = message.guild.members.cache.get(target.id);

            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted`);
            } else {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been muted for ${args[1]} minutes`);

                setTimeout(() => {
                    memberTarget.roles.remove(muteRole.id);
                    memberTarget.roles.add(mainRole.id);
                    message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
                }, args[1] * 60000);
            }
        } else {
            message.channel.send('User not found');
        }
    }
};