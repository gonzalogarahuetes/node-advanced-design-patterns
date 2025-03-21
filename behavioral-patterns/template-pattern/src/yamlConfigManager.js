const yaml = require("js-yaml");
const ConfigManager = require("./configManager");

class YAMLConfigManager extends ConfigManager {
    parse(data) {
        return yaml.load(data);
    }

    stringify(data) {
        return yaml.dump(data);
    }
}

module.exports = YAMLConfigManager;