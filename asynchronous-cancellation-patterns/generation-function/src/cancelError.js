export class CancelError extends Error {
    constructor() {
        super("Async operation was cancelled")
        this.name = "CancelError"
    }
}