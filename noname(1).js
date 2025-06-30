let currentIndex = 0;
let images = [];

function openLightbox(src) {
  images = Array.from(document.querySelectorAll('.gallery-item img'));
  currentIndex = images.findIndex(img => img.src === src);
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function navigateLightbox(direction) {
  currentIndex = (currentIndex + direction + images.length) % images.length;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  let items = document.querySelectorAll(".gallery-item");
  items.forEach(item => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
