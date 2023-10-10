import { galleryItems } from "./gallery-items.js";
// Change code below this line
// import * as basicLightbox from 'basiclightbox'

function createGallery() {
  const gallery = document.querySelector(".gallery");

  galleryItems.forEach(({ preview, original, description }) => {
    const listItem = document.createElement("li");
    listItem.classList.add("gallery__item");

    const link = document.createElement("a");
    link.classList.add("gallery__link");
    link.href = original;

    const image = document.createElement("img");
    image.classList.add("gallery__image");
    image.src = preview;
    image.dataset.source = original;
    image.alt = description;

    image.dataset.title = description;

    link.appendChild(image);
    listItem.appendChild(link);
    gallery.appendChild(listItem);
  });
}

createGallery();

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = new SimpleLightbox(".gallery a.gallery__link", {
    captions: true,
    captionDelay: 250,    
    captionsData: "alt",
  });
});
