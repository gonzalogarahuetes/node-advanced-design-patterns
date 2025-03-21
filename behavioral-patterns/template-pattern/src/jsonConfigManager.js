const ConfigManager = require("./configManager");

class JSONConfigManager extends ConfigManager {
    parse(data) {
        return JSON.parse(data);
    }

    stringify(data) {
        return JSON.stringify(data);
    }
}

module.exports = JSONConfigManager;