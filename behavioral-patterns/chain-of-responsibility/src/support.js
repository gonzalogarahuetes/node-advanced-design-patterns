const Handler = require("./handler");

class BasicSupport extends Handler {
    handle(request) {
        if (request.type === "basic") {
            console.log("Basic Support: Handling Request.");
        }
        console.log("Basic Support: Passing request to next handler...");
        super.handle(request)
    }
}

class TechnicalSupport extends Handler {
    handle(request) {
        if (request.type === "technical") {
            console.log("Technical Support: Handling Request.");
        }
        console.log("Technical Support: Passing request to next handler...");
        super.handle(request)
    }
}

class ManagerSupport extends Handler {
    handle(request) {
        if (request.type === "manager") {
            console.log("Manager Support: Handling Request.");
        }
        console.log("Manager Support: No further handler. Request unhandled.");
    }
}

module.exports = { BasicSupport, TechnicalSupport, ManagerSupport };