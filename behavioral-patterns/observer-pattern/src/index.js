const Phone = require("./phone");
const WeatherStation = require("./weatherStation");
const Web = require("./web");

// Create a weather station (the subject)
const weatherStation = new WeatherStation();

// Create some observers
const phoneDisplay = new Phone();
const webDashboard = new Web();

// Subscribe the observers to the weather station
weatherStation.addObserver(phoneDisplay);
weatherStation.addObserver(webDashboard);

// Change the temperature (this will notify all observers)
weatherStation.setTemperature(25);
weatherStation.setTemperature(30);