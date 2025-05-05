import { CancelError } from "./cancelError.js";
import { createAsyncCancellable } from "./createAsyncCancellable.js";
import { someAsyncTask } from "./someAsyncTask.js";

const cancellableFunction = createAsyncCancellable(function* () {
    const result1 = yield someAsyncTask("1");
    console.log(result1);

    const result2 = yield someAsyncTask("2");
    console.log(result2);

    const result3 = yield someAsyncTask("3");
    console.log(result3);
})

const { promise, cancel } = cancellableFunction();

promise.catch((error) => {
    if(error instanceof CancelError) {
        console.log("Function was cancelled.");
    } else {
        console.error(error);
    }
})

setTimeout(() => {
    cancel();
}, 200);