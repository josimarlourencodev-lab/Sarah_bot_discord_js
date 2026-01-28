const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a Melhor playlst de estudos"),

    async execute(interaction) {
        await interaction.reply("https://www.youtube.com/playlist?list=PL8Xc8tmNaH64FO8SRMk4bDm-0XHg1X_kn")
    }

}