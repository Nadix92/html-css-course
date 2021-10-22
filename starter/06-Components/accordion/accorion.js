const items = document.querySelectorAll('.item');

for (i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function () {
    this.classList.toggle('open');
  });
}
