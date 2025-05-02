export async function someAsyncTask(id) {
    console.log(`Async task with id ${id} has started.`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`Async task with id ${id} has finished.`);
            resolve(`Result of the task <${id}>: blah blah`)
        }, 200);
    })
    
}