const navbar = document.querySelector('.navbar')
const heading = document.querySelector('.heading')
const gallery = document.querySelector('.gallery')
const carouselNext = document.querySelector('#carouselNext')
const carouselBack = document.querySelector('#carouselBack')
const headingImg = document.querySelector('#headingImg')
const carouselHeading = document.querySelector('.carouselHeading')
const imageUrls = ['images/campaignHeader.avif', 'images/parkImageCarousel.avif', 'images/greeneryCarousel.avif']
const carouselHeadingTexts = ['Roots of the Rail Park End-of-Year Fundraiser<br><a href="#">Make a donation today!</a>', 'Phase One is free & open daily<br><a href="#">Plan your visit</a>', 'Turning historic tracks into an unparalleled park.<br><a href="#">See the full version</a>']
let i = 0

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

function carouselImageChange(image) {
    image.removeAttribute('style')
    image.classList.remove('imgFadeIn')
    image.classList.add('imgFadeOut')
    setTimeout(() => {
        image.classList.remove('imgFadeOut')
        image.style.opacity = "0"
        image.style.transformOrigin = "-100% -150%"
        image.style.transform = "rotate(10deg)"
    }, 500)
    setTimeout(() => {
        image.src = imageUrls[i]
        image.classList.add('imgFadeIn')
        image.style.opacity = "1"
    }, 700)
}

function carouselTextChange(headingText) {
    headingText.style.transform = "translateY(20px)"
    headingText.style.opacity = "0"
    setTimeout(() => {
        headingText.innerHTML = carouselHeadingTexts[i]
        headingText.style.transform = "translate(0px)"
        headingText.style.opacity = "1"
    }, 700)

}

function next() {
    if (i >= imageUrls.length - 1) {
        i = 0
    }
    else {
        i += 1
    }
    carouselImageChange(headingImg)
    carouselTextChange(carouselHeading)
}

function back() {
    if (i < 1) {
        i = imageUrls.length - 1
    }
    else {
        i -= 1
    }
    carouselImageChange(headingImg)
    carouselTextChange(carouselHeading)
}

window.addEventListener('scroll', parallax)
carouselNext.addEventListener('click', next)
carouselBack.addEventListener('click', back)