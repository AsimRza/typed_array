document.getElementById("fileInput").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const arrayBuffer = await file.arrayBuffer(); // Read file as ArrayBuffer
  const view = new DataView(arrayBuffer);

  console.log(view, "view");

  const value = view.getUint32(0, true);
  console.log("Value from file:", value);

  const decoder = new TextDecoder("utf-8");
  const text = decoder.decode(arrayBuffer);

  console.log("Text from file:", text);
});
