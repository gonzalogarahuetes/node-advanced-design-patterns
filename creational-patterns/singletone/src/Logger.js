class Logger {
    constructor() {
        this.logs = []
    }

    get count() {
        return this.logs.length
    }

    log(message) {
        const timestamp = new Date().toISOString();
        this.logs.push({message, timestamp});
        console.log(`${timestamp} - ${message}`);
    }
}

// Very typical approach in OOP:
// class Singletone {
//     constructor() {
//         if(!Singletone.instance) {
//             Singletone.instance = new Logger();
//         }
//     }

//     getInstance() {
//         return Singletone.instance;
//     }
// }



module.exports = new Logger();