module.exports = {
    data: {
        name: 'sub-yt'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: 'https://www.youtube.com/watch?v=dbfF570IyCg'
        });
    }
};