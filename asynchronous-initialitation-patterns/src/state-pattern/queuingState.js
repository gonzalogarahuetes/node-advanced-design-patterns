const FUNCTIONS_NEED_AUTH = ["sendMessage"]

export class QueuingState {
    constructor(service) {
        this.service = service;
        this.commandsQueue = [];

        FUNCTIONS_NEED_AUTH.forEach(methodName => {
            this[methodName] = (...args) => {
                console.log("Command queue: ", methodName, args);
                return new Promise((resolve, reject) => {
                    const command = () => {
                        service[methodName](...args).then(resolve, reject);
                    }
                    this.commandsQueue.push(command);
                })
            }
        })
    }

    disable() {
        this.commandsQueue.forEach(command => command());
        this.commandsQueue = [];
    }
}