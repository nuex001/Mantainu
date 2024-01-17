//menu
const menu = document.querySelector("#menu");
const menuBtn = document.querySelector("#menuBtn");
console.log("menuBtn");

const toggleMenu = () => {
    menu.classList.toggle("active");
}
const closeMenu = () => {
    menu.classList.remove("active");
}
menuBtn.addEventListener("click", toggleMenu)






const token = document.querySelector(".token");

//WINDOW EVENT
window.addEventListener("scroll", () => {
    const tokenTop = token.getBoundingClientRect().top;
    const triggerbottom = window.innerHeight / 6 * 4;
    if (tokenTop < triggerbottom) {
        token.classList.add("active");
    }
})