// Regular Array (Slower)
console.time("Regular Array");
const regularArr = [];
for (let i = 0; i < 1_000_000; i++) {
  regularArr.push(i);
}
console.timeEnd("Regular Array");

// Typed Array (Faster)
console.time("Typed Array");
const typedArr = new Uint32Array(1_000_000);
for (let i = 0; i < typedArr.length; i++) {
  typedArr[i] = i;
}
console.timeEnd("Typed Array");

//save memory

const normalArray = new Array(1000).fill(255); // ~8KB memory
const typedArray = new Uint8Array(1000); // 1KB memory
typedArray.fill(255);

//  Avoid coercion bugs

const arr2 = new Uint8Array(2);
arr2[0] = 300;
console.log(arr2[0]);

// Suppose you're decoding a 16-bit little-endian binary format:
const buffer = new ArrayBuffer(4);
const view = new DataView(buffer);
view.setUint16(0, 258, true); // Little-endian: 0x02, 0x01
const arr = new Uint8Array(buffer);
console.log(arr);

//file

const input = document.querySelector("input[type='file']");
input.addEventListener("change", () => {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = () => {
    const buffer = reader.result; // ArrayBuffer
    const bytes = new Uint8Array(buffer);
    console.log(bytes); // Raw byte data
  };

  reader.readAsArrayBuffer(file);
});
