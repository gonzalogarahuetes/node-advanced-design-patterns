class Handler {
    constructor() {
        this.nextHandler = null;
    }

    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        console.log("No handler was able to process the request.");
    }

    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
}

module.exports = Handler;