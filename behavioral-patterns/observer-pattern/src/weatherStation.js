class WeatherStation {
    constructor() {
        this.temperature = null;
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    notifyObservers() {
        this.observers.forEach(o => o.update(this.temperature))
    }

    setTemperature(temperature) {
        console.log(`Weather Station: new temperature is ${temperature}ºC`);
        this.temperature = temperature;
        this.notifyObservers();
    }
}

module.exports = WeatherStation;