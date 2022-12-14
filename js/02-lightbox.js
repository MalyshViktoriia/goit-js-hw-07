import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function addGalleryItems (galleryItems) {
   const pictures = galleryItems.reduce((acc, {preview, original, description}) => {
        return acc + `
        <li class="gallery__item">
            <a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
        </li>`


    }, '')

    gallery.insertAdjacentHTML('afterbegin', pictures);
};

addGalleryItems(galleryItems);

new SimpleLightbox('.gallery a', { fadeSpeed: 500, captionDelay: 250, captionsData: "alt", scrollZoom: true, });