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
// End navbar mobile

// Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
       scrollFunction();
};

function scrollFunction() {
       if (
              document.body.scrollTop > 20 ||
              document.documentElement.scrollTop > 20
       ) {
              mybutton.style.display = "block";
       } else {
              mybutton.style.display = "none";
       }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
       document.body.scrollTop = 0;
       document.documentElement.scrollTop = 0;
}