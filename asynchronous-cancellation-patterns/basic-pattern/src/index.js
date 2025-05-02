import { CancelError } from "./cancelError.js";
import { someAsyncTask } from "./someAsyncTask.js";

function throwIfCancelled(cancel) {
    if(cancel.reqCancelled) {
        throw new CancelError()
    }
}

async function cancellableFunction(cancel) {
    const result1 = await someAsyncTask(1);
    console.log(result1);

    throwIfCancelled(cancel);

    const result2 = await someAsyncTask(2);
    console.log(result2);

    throwIfCancelled(cancel);

    const result3 = await someAsyncTask(3);
    console.log(result3);
}

const cancel = { reqCancelled: false }

cancellableFunction(cancel).catch((error) => {
    if(error instanceof CancelError) {
        console.log("Function was cancelled.");
    } else {
        console.error(error);
    }
})

setTimeout(() => {
    cancel.reqCancelled = true;
}, 200);