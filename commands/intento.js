const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('intento')
		.setDescription('agrega otra info.')
        .addStringOption(option => {
            return option.setName("cualcosa")
            .setDescription("te adivinare lo que escribas")
            .setRequired(true)
            .addChoices(
                {name: 'Cosa 1', value: 'cosaUno'},
                {name: 'Cosa 2', value: 'cosaDos'},
                {name: 'Cosa 3', value: 'cosaTres'}
            )
        }),
	async execute(interaction) {
		let descripcion = interaction.options.getString('cualcosa');
		await interaction.reply(`lo que has escrito es ${descripcion}`);
	},
};