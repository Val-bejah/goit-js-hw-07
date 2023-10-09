import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryPhotos = document.querySelector("ul.gallery");
const photos = createGalleryItem(galleryItems);
function createGalleryItem(element) {
  return element.map(({ preview, original, description }) => {
    let gallery = document.getElementsByClassName("gallery");
    let list = document.createElement("ul");
    list.innerHTML = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
  </li>`;
    gallery[0].appendChild(list);
  });
}
const gallery = document.querySelector(".gallery");
function onGalleryItemClick(event) {
  event.preventDefault();
  const imageSrc = event.target.dataset.source;
  const instance = basicLightbox.create(`
        <img src="${imageSrc}" width="800" height="600">
      `);
  instance.show();
}

function addGalleryItemsListener() {
  gallery.addEventListener("click", (event) => {
    if (event.target.classList.contains("gallery__image")) {
      onGalleryItemClick(event);
    }
  });
}
addGalleryItemsListener();
window.addEventListener('keydown' , onEscKeyPress);
function onEscKeyPress(event){
  const ESC_KEY = 'Escape'
      if (event.code === ESC_KEY){
           instance.close();
           window.removeEventListener('keydown', onEscKeyPress)
    }
   }
