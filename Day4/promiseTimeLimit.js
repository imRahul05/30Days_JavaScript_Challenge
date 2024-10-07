// Define a function `timeLimit` that takes a function `fn` and a time limit `t` in milliseconds
var timeLimit = (fn, t) => async (...args) => 
    // Return an async function that takes any number of arguments
    Promise.race([
        // Start executing the provided function `fn` with the given arguments
        fn(...args), 
        // Create a promise that rejects with 'Time Limit Exceeded' after `t` milliseconds
        new Promise((_, reject) => setTimeout(() => reject('Time Limit Exceeded'), t))
    ]);
