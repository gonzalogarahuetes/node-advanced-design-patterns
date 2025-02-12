const LocalStorage = require("./local-storage");

console.log("Number of items in localStorage: ", LocalStorage.length);

const theme = LocalStorage.getItem("theme_mode");

console.log("theme_mode: ", theme);

if(!theme) {
    console.log("Theme not selected. Assigning the default mode.");
    LocalStorage.setItem("theme_mode", "light");
    LocalStorage.setItem("setting_code", "5");
}