const {
    callbackFunction,
    promiseFunction,
    callbackFunctionError,
    promiseFunctionError
} = require("./async_api");

/**
 * console.log data got from callbackFunction
 */
function printDataCallback() {
    function printText(str, data) {
        console.log(data);
    }
    callbackFunction(printText);
}

/**
 * console.log data got from promiseFunction
 */
function printDataPromise() {
    return new Promise(function (resolve, reject) {
        resolve((promiseFunction()));
    });
}
let promise = printDataPromise();
promise
    .then(result => console.log(result));

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    let promise2 = new Promise(function (resolve, reject) {
        resolve((promiseFunction()));
    });
    let result1 = await promise2;
    console.log(result1);
}
printDataAsyncAwait();

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function handleError(str, data) {
        if (str) throw str;
        console.log(str);
    }
    callbackFunctionError(handleError);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    return new Promise(function (resolve, reject) {
        throw ((promiseFunctionError()));
    });
}
let promise1 = handlePromiseError();
promise1
    .catch(error => console.log(error.message));

/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    let promise3 = new Promise(function (resolve, reject) {
        reject((promiseFunctionError()));
    });
    let result2 = await promise3;
    console.log(result2);
}
handleAsyncAwaitError();

module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};