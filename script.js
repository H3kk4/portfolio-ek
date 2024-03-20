const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".navbar-mobile")
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


function openPDF() {
    const overlay = document.querySelector("#overlay")
    const popup = document.querySelector(".popup")

    overlay.style.display = "block"
    popup.style.display = "block"

    overlay.addEventListener('click', closePDF)
}

function closePDF() {
    const overlay = document.querySelector("#overlay")
    const popup = document.querySelector(".popup")

    overlay.style.display = "none"
    popup.style.display = "none"

    overlay.removeEventListener('click', closePDF)

}