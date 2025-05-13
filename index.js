const blob = new Blob(["Hello, world!"], { type: "text/plain" });

blob
  .stream()
  .getReader()
  .read()
  .then((data) => console.log(data));

//For File Uploads and Downloads

// const fileInput = document.querySelector('input[type="file"]');
// const formData = new FormData();
// formData.append("file", fileInput.files[0]);

// fetch("/upload", {
//   method: "POST",
//   body: formData,
// });

// Creating Downloadable Files

// const data = "Hello, world!";
// const blob = new Blob([data], { type: "text/plain" });
// const url = URL.createObjectURL(blob);
// const a = document.createElement("a");
// a.href = url;
// a.download = "hello.txt";
// a.click();

//Displaying Images or Videos

const fileInput = document.querySelector('input[type="file"]');

// Listen for a file selection change
fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];

  if (file) {
    const imageUrl = URL.createObjectURL(file); // Directly create URL from the file
    const img = document.createElement("img");

    img.src = imageUrl;
    document.body.appendChild(img);
  }
});
