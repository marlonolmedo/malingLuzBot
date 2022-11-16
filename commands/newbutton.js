const { SlashCommandBuilder,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
    Events,
    EmbedBuilder
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('newbutton')
        .setDescription('Press their!'),
    async execute(interaction) {
        const row = new ActionRowBuilder()
            .addComponents(
                new ButtonBuilder()
                    .setCustomId('sub-yt')
                    .setLabel('Press me!')
                    .setStyle(ButtonStyle.Primary),
            );
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Some title')
            .setURL('https://discord.js.org')
            .setDescription('Some description here');
        await interaction.reply({ content: 'I think you should,', ephemeral: true, embeds: [embed], components: [row] });
    },
};