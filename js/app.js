function previewImage(src) {
  // Create image element
  var img = document.createElement("img");
  img.src = src;

  // Display image preview
  var preview = document.getElementById("preview");
  preview.innerHTML = "";
  preview.appendChild(img);
  preview.style.display = "flex";

  // Close preview on click outside image
  preview.onclick = function () {
    console.log('preview clicked');
    preview.style.display = "none";
  };
}