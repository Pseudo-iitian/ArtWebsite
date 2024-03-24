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


// to stops it before heading
document.addEventListener('DOMContentLoaded', function() {
  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default behavior of the click event
      var targetId = this.getAttribute('href'); // Get the target section's ID
      var targetElement = document.querySelector(targetId); // Find the target section
      var offset = 90; // Adjust this value to set the offset from the top of the page

      // Scroll to the target section with an offset
      window.scrollTo({
        top: targetElement.offsetTop - offset,
        behavior: 'smooth' // Optional: animate the scrolling
      });
    });
  });

  // Reset scroll position to top when the page reloads
  window.onload = function() {
    window.scrollTo(0, 0);
  };

  var upTarget = document.getElementById('home');
  upTarget.addEventListener('click',()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: animate the scrolling
    });
  })
  
});
