```In JavaScript, the setTimeout function can be used to execute callbacks after a delay. However, it introduces a layer of nesting in the code which may not be desired. It'd be nice to use setTimeout in this fashion:

// Note: the following code contains invalid syntax and doesn't work.
console.log('Hello!');
setTimeout(1000);
console.log('Bye.');
In languages like Java and Python, a sleep function is available to suspend execution of the calling thread. However, unlike other languages, JavaScript is single-threaded and blocking the main thread is not a good idea. Hence lets implement an asynchronous version of the sleep function that works similarly but does not block the main thread.```

/**
 * @param {number} duration
 * @return {Promise<void>}
 */
export default async function sleep(duration) {
    let promise = new Promise((resolve)=>{
      setTimeout(()=>{
        resolve()
      },duration)
    })
  
    return promise
  
  }