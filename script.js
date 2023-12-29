const navbar = document.querySelector('.navbar')
const heading = document.querySelector('.heading')
const gallery = document.querySelector('.gallery')

function parallax() {
    let scrollValue = window.scrollY;
    console.log(scrollValue)

    if (scrollValue >= 50) {
        console.log("true");
        navbar.style.transform = "translateY(-135px)";
    }
    else {
        navbar.style.transform = "translateY(0px)"
    }

    heading.style.marginTop = `-${scrollValue / 1.25}px`

    gallery.style.marginTop = `-${scrollValue}px`
}

window.addEventListener('scroll', parallax)