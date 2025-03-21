const WebSocket = require("ws");

class OfflineState {
    constructor(client) {
        this.client = client;
        this.retryInterval = 2000;
        this.retryTimer = null;
    }

    connect() {
        console.log(`Entered offline state, will attempt to reconnect.`);
        this.startRetryTimer();
    }

    send(message) {
        console.log("Queuing the message:", message);
        this.client.queue.push(message);
    }

    startRetryTimer() {
        if (this.retryTimer) {
            return
        }
        this.retryTimer = setInterval(() => {
            console.log(`Attempting to reconnect...`);
            const socket = new WebSocket(this.client.url);
            socket.on("open", () => {
                clearInterval(this.retryTimer);
                this.retryTimer = null;
                socket.close();
                console.log("Reconnected to the server.");
                this.client.transitionTo("online");
            })
            socket.on("error", () => {
                console.log("Reconnection attempt failed.");
                socket.close();
            })
        }, this.retryInterval)
    }
}

module.exports = OfflineState;