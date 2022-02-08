//Fadding Images in Start.
const images = document.getElementsByTagName("img");
for (let image of images) {
  image.addEventListener("load", fadeImg);
  image.style.opacity = "0";
}

function fadeImg () {
  this.style.transition = "opacity 2s";
  this.style.opacity = "1";
}
//Fadding Imeages in End.