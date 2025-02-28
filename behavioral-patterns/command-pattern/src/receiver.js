class Receiver {
    constructor() {
        this.trace = [];
        this.undone = [];
    }

    run(command) {
        console.log(`We are running command: ${command.name}`);
        command.execute();
        this.trace.push(command)
    }

    printTrace() {
        this.trace.forEach(command => console.log(command.name));
    }

    undo() {
        let command = this.trace.pop();
        console.log(`↩️ ${command.name}`);
        command.undo();
        this.undone.push(command);
    }

    redo() {
        let command = this.undone.pop();
        console.log(`↪️ ${command.name}`);
        command.execute();
        this.trace.push(command);
    }
}

module.exports = new Receiver();