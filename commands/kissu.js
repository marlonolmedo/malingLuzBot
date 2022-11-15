const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('kissu')
        .setDescription('enviar kissu al usuario.')
        .addSubcommand(subComand => {
            return subComand.setName("user")
                .setDescription("escoge al usuario para enviar.")
                //.setRequired(true)
                .addUserOption(option => option
                    .setName('usuario')
                    .setDescription('The user')
                    .setRequired(true)
                )
        }),
    async execute(interaction) {
        let usuarioEscogido = interaction.options.getUser('usuario');
        //console.log(usuarioEscogido);
        await interaction.reply(`el usuario ${interaction.user.username} say: MUUUUUAAAAAA ${usuarioEscogido.username}`);
    },
};