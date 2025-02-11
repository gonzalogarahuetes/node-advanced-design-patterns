export class Config {
    constructor(setup) {
        const settings = {};
        const configurator = {
            set: (key, value) => {
                settings[key] = value
            },
            setMultiple: (configObj) => {
                Object.assign(settings, configObj)
            }
        };
        setup(configurator);
        Object.freeze(settings);
        this.get = (key) => settings[key];
        this.getAll = () => ({...settings})
    }
}