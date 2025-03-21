const fs = require("fs").promises;

class ConfigManager {
    constructor() {
        this.configData = {}
    }

    async loadConfig(filePath) {
        const data = await fs.readFile(filePath, "utf-8");
        this.configData = this.parse(data);
    }

    async saveConfig(filePath) {
        const data = this.stringify(this.configData);
        await fs.writeFile(filePath, data, "utf-8");
    }

    get(key) {
        return this.configData[key];
    }

    set(key, value) {
        this.configData[key] = value;
    }

    parse(data) {

    }

    stringify(data) {

    }
}

module.exports = ConfigManager;