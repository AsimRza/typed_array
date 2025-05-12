const buffer = new ArrayBuffer(7);
const view = new DataView(buffer);

view.setUint8(0, 1);
view.setUint16(1, 28, true);
view.setFloat32(3, 1535.75, true);

// Now read the data
const status = view.getUint8(0);
const age = view.getUint16(1, true);
const salary = view.getFloat32(3, true);

console.log("Status:", status);
console.log("Age:", age);
console.log("Salary:", salary);
