// button navbar mobile
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
       menu.classList.toggle("hidden");
});

function Menu(e) {
       let list = document.querySelector('ul');
       e.name === 'menu' ? (
              e.name = "close", list.classList.add('top-[80px]'),
              list.classList.add('opacity-100')) : (
              e.name = "menu", list.classList.remove('top-[80px]'),
              list.classList.remove('opacity-100')
       )
}

// klik img penjualan
const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
       allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
       image.addEventListener('mouseover', () => {
              imgContainer.querySelector('img').src = image.src;
              resetActiveImg();
              image.parentElement.classList.add('active');
       });
});

function resetActiveImg() {
       allHoverImages.forEach((img) => {
              img.parentElement.classList.remove('active');
       });
}
