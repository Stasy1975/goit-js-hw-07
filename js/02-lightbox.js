import { galleryItems } from './gallery-items.js';

console.log(galleryItems);
const galleryUl = document.querySelector('.gallery');

function galleryGreat(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__card"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
    })
    .join(' ');
}

galleryUl.insertAdjacentHTML('afterbegin', galleryGreat(galleryItems));

const gallery = new SimpleLightbox('.gallery__item', {
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
