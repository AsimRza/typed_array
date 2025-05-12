const buffer = new ArrayBuffer(4);

const view = new Uint8Array(buffer);

view[0] = 10;
view[1] = 20;

console.log(view);
