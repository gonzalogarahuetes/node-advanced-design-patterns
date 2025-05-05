import { CancelError } from "./cancelError.js";

export function createAsyncCancellable(generator) {
    return function asyncCancellable(...args) {
        const generatorObj = generator(...args);

        let reqCancelled = false;

        function cancel() {
            reqCancelled = true;
        }

        const promise = new Promise((resolve, reject) => {
            async function nextYield(prevResult) {
                if(reqCancelled) {
                    return reject(new CancelError());
                }

                if(prevResult.done) {
                    return resolve(prevResult.value);
                }

                try {
                    nextYield(generatorObj.next(await prevResult.value));
                } catch (error) {
                    try {
                        nextYield(generatorObj.throw(error));
                    } catch (error2) {
                        return reject(error2);
                    }
                }
            }

            nextYield({});
        });

        return { promise, cancel }
    }
}