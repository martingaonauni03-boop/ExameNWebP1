const trigger = document.querySelector('#open-feature');
const lightbox = document.querySelector('#feature-lightbox');
const card = document.querySelector('#grow-together').cloneNode(true);

card.removeAttribute('id');
card.querySelector('h2').id = 'lightbox-title';
lightbox.querySelector('.lightbox__content').append(card);

trigger.addEventListener('click', () => lightbox.showModal());
lightbox.querySelector('.lightbox__close').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target !== lightbox) return;
  const bounds = lightbox.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom) {
    lightbox.close();
  }
});
