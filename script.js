const menuBtn = document.querySelector(".menu-btn")
const navLinks = document.querySelector(".navbar-mobile")
menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu')
})


function openPDF(doc) {
    const embed = document.querySelector("#embed")
    const overlay = document.querySelector("#overlay")
    const popup = document.querySelector(".popup")

    var embedInit = embed.src

    embed.src += doc + ".pdf"

    overlay.style.display = "block"
    popup.style.display = "block"
    

    overlay.addEventListener('click', closePDF)

    function closePDF() {
        
    
        const overlay = document.querySelector("#overlay")
        const popup = document.querySelector(".popup")
    
        overlay.style.display = "none"
        popup.style.display = "none"

        
    
        embed.src = embedInit
        overlay.removeEventListener('click', closePDF)
        
    }
}

function openCarousel(id) {
    const overlay = document.querySelector("#overlay")
    const popup = document.querySelector(".popup-" + id)
    const embed = document.querySelector(".carousel-item")


    overlay.style.display = "block"
    popup.style.display = "block"
    
    embed.addEventListener('click', openFS(embed.id))
    overlay.addEventListener('click', closeCarousel)

    function openFS(id){
        console.log(id)
    }


    function closeCarousel() {
        const overlay = document.querySelector("#overlay")
        const popup = document.querySelector(".popup-" + id)
    
        overlay.style.display = "none"
        popup.style.display = "none"

        overlay.removeEventListener('click', closeCarousel)
        
    }
}


