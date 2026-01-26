const {SlashCommandBuilder} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('tem responder com Pong!'),
	async execute(interaction) {
		await interaction.reply('Pong!'); 
	},
};