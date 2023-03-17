// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

const galleryItem = galleryItems
  .map(
    item => `
<a class = "gallery__link" href = "${item.original}">
<img class = "gallery__image" src = "${item.preview}"
data-source = "${item.original}" alt = "${item.description}"/></a></div>`
  ).join("");

gallery.insertAdjacentHTML('beforeend', galleryItem);

const lightbox = new SimpleLightbox('.gallery .gallery__item', {
  captions: true,
  captionSelector: 'img',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  enableKeyboard: true,
});