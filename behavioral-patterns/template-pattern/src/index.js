const JSONConfigManager = require("./jsonConfigManager");
const YAMLConfigManager = require("./yamlConfigManager");

async function main() {
    const jsonConfig = new JSONConfigManager();
    await jsonConfig.loadConfig("config.json");
    jsonConfig.set("application", "config");
    await jsonConfig.saveConfig("config_modified.json");
    console.log("JSON configurations saved");

    const yamlConfig = new YAMLConfigManager();
    await yamlConfig.loadConfig("config.yaml");
    yamlConfig.set("db-name", "blah");
    await yamlConfig.saveConfig("config_modified.yaml");
    console.log("YAML configurations saved");
}

main().catch((error) => console.error(error));