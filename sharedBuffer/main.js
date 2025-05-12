const path = require("path");
const { Worker } = require("worker_threads");

const sab = new SharedArrayBuffer(4);
const sharedView = new Uint8Array(sab);

sharedView[0] = 42;

new Worker(path.resolve(__dirname, "worker.js"), {
  workerData: sab,
});

//Waiting for worker change data
setTimeout(() => {
  console.log("Main thread:", sharedView[0]);
}, 1000);
