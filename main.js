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
const count = document.querySelector(".count");
const count2 = document.querySelector(".count2");

const handleScroll = () => {
    const tokenTop = token.getBoundingClientRect().top;
    const triggerbottom = window.innerHeight / 5 * 4;
    if (tokenTop <= triggerbottom) {
        const max = 21000000000;
        let countNo = 0;
        const max2 = 22;
        let countNo2 = 0;
        const interval = setInterval(() => {
            countNo += 200000000;
            if (countNo >= max) {
                clearInterval(interval);
            }
            count.innerHTML = countNo.toLocaleString();
        }, 100); //1miliseconds

        const interval2 = setInterval(() => {
            countNo2 += 1;
            if (countNo2 >= max2) {
                clearInterval(interval2);
            }
            count2.innerHTML = countNo2.toLocaleString();
        }, 100); //1miliseconds
        // Remove the scroll event listener after executing the code
        window.removeEventListener("scroll", handleScroll);
    }
}
//WINDOW EVENT
window.addEventListener("scroll", handleScroll)
