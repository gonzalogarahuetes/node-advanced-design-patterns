import { CancelError } from "./cancelError.js";
import { createCancellable } from "./createCancellable.js";
import { someAsyncTask } from "./someAsyncTask.js";

async function cancellableFunction(createCancellable) {
    const result1 = await createCancellable(someAsyncTask, "1");
    console.log(result1);

    const result2 = await createCancellable(someAsyncTask, "2");;
    console.log(result2);

    const result3 = await createCancellable(someAsyncTask, "3");;
    console.log(result3);
}

const { cancelWrapper, cancel } = createCancellable();

cancellableFunction(cancelWrapper).catch((error) => {
    if(error instanceof CancelError) {
        console.log("Function was cancelled.");
    } else {
        console.error(error);
    }
})

setTimeout(() => {
    cancel();
}, 200);