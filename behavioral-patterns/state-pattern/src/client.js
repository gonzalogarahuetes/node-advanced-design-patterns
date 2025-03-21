const WebSocket = require("ws");
const readline = require("readline");
const OnlineState = require("./online-state");
const OfflineState = require("./offline-state");

class ChatClient {
    constructor(url) {
        this.url = url;
        this.socket = null;
        this.queue = []
        this.currentState = null;
        this.states = {
            offline: new OfflineState(this),
            online: new OnlineState(this)
        };

        this.transitionTo("offline");
        this.setupInput();
    }

    transitionTo(stateName) {
        console.log(`Transitioning to ${stateName} state...`);
        this.currentState = this.states[stateName];
        this.currentState.connect()
    }

    send(message) {
        this.currentState.send(message)
    }

    setupInput() {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
            prompt: "",
        });

        rl.on("line", (line) => {
            const message = line.trim();
            if (message) {
                this.send(message);
            }
        });
    }


}

// Start the client
const client = new ChatClient("ws://localhost:8080");
