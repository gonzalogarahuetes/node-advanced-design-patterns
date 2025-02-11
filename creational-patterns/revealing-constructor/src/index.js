import { Config } from "./Config"

const config = new Config((appConfig) => {
    appConfig.set("port", 3000);
    appConfig.set("env", "development");
    appConfig.setMultiple({
        database: "myddbb",
        debug: true,
    })
});

console.log("App Port: ", config.get("port"));
console.log("All settings: ", config.getAll());

// startup of the application

config.getAll.port = 8000;
console.log("App Port after the modification attempt: ", config.get("port"));
