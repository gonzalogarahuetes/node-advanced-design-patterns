import { CancelError } from "./cancelError.js";

export function createCancellable() {
    let reqCancelled = false;

    function cancel() {
        reqCancelled = true;
    }

    function cancelWrapper(func, ...args) {
        if(reqCancelled) {
            return Promise.reject(new CancelError());
        }
        return func(...args)
    }

    return { cancelWrapper, cancel }
}