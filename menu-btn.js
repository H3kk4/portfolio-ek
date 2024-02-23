const menuBtn = document.querySelector(".menu-btn")
        const navLinks = document.querySelector(".navbar-mobile")
        menuBtn.addEventListener('click',() => {
            navLinks.classList.toggle('mobile-menu')
        })