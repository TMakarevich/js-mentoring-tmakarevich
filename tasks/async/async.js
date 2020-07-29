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
    promiseFunction().then(result => console.log(result));
}

/**
 * console.log data got from promiseFunction using async/await
 */
async function printDataAsyncAwait() {
    const result = await promiseFunction();
    console.log(result);
}

/**
 * throw error data from callbackFunctionError
 */
function handleErrorCallback() {
    function throwError(err, data) {
        if (err) throw err;
    }
    callbackFunctionError(throwError);
}

/**
 * throw error come from promiseFunctionError
 */
function handlePromiseError() {
    promiseFunctionError.catch(error => console.log(error));

}


/**
 * throw error come from promiseFunctionError using async/await
 */
async function handleAsyncAwaitError() {
    try {
        await promiseFunctionError;
    } catch (error) {
        console.log(error);
    }
}


module.exports = {
    printDataCallback,
    printDataPromise,
    handleErrorCallback,
    handlePromiseError,
    printDataAsyncAwait,
    handleAsyncAwaitError
};