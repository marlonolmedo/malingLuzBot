const fs = require('node:fs');

module.exports = (client) => {
    client.handlersComponents = async () => {
        console.log(__dirname);
        const folderComponent = path.join(_dirname, '/components');
        for (let folderOf of folderComponent) {
            const componentsFile = fs.readdirSync(folderComponent)
            
        }

    };
}