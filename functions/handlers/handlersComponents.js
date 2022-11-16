const fs = require('node:fs');
const path = require('node:path');

module.exports = (client) => {
    client.handlersComponents = async () => {
        const pathFolder = './components';
        const folderComponents = fs.readdirSync(pathFolder);
        for (let folderOf of folderComponents) {
            const filePath = `${pathFolder}/${folderOf}`;
            const componentsFile = fs.readdirSync(filePath).filter(file => file.endsWith('.js'));

            const {
                buttons
            } = client;

            switch (folderOf) {
                case "buttons":
                    for (let fileOf of componentsFile) {
                        //const button = require(`${filePath}/${fileOf}`);
                        const button = require(`../../components/buttons/${fileOf}`);
                        buttons.set(button.data.name, button);
                    }
                    break;

                default:
                    break;
            }

        }

    };
}