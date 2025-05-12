const { workerData } = require("worker_threads");

const sharedView = new Uint8Array(workerData);

Atomics.store(sharedView, 0, 99);
