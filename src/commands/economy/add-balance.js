const economy = require('../../economy');

module.exports = {
    commands: ['add-balance', 'addbal'],
    description: 'Checks the balance of a user',
    minArgs: 2,
    maxArgs: 2,
    expectedArgs: '<user>, <amount>',
    permissionError: 'you do not have permission to execute this command.',
    callback: async (message, arguments) => {
        const target = message.mentions.users.first();
        if (!target) {
            message.reply('Please tag a user to add coins to.');
            return;
        }
        const amount = arguments[1];
        if (!amount || isNaN(amount)) {
            message.reply('You must specify an amount.');
            return;
        }

        const guildId = message.guild.id;
        const userId = target.id;

        const coins = await economy.addCoins(guildId, userId, amount);

        message.channel.send(`You've given ${target} ${amount} coin(s). They now have a balance of ${coins} coins!`);
        
    },
    permissions: ['ADMINISTRATOR'],
}