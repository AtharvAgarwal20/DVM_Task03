const body = document.querySelector('body')
const navbar = document.querySelector('.navbar')
const ham = document.querySelector('.ham')
const hamContent = document.querySelector('.hamContent')
const contentFirst = document.querySelector('.hamContent div:nth-of-type(1)')
const contentSecond = document.querySelector('.hamContent div:nth-of-type(2)')
const contentThird = document.querySelector('.hamContent div:nth-of-type(3)')
const contentFourth = document.querySelector('.hamContent div:nth-of-type(4)')
const navSearch = document.querySelector('.navSearch')
const navLinks = document.querySelector('.mainLinks')
const donateBtn = document.querySelector('#donateBtn')
const mainPage = document.querySelector('.contents')
const hamUpper = document.querySelector('.upperLine')
const hamLower = document.querySelector('.lowerLine')
const heading = document.querySelector('.heading')
const gallery = document.querySelector('.gallery')
const carouselNext = document.querySelector('#carouselNext')
const carouselBack = document.querySelector('#carouselBack')
const headingImg = document.querySelector('#headingImg')
const hoursBadge = document.querySelector('#hoursBadge')
const carouselHeading = document.querySelector('.carouselHeading')
const entrancesHeading = document.querySelectorAll('.contents .gallery .entrances h3')
const entranceSection = document.querySelector('.entrances')
const videos = document.querySelectorAll('video')
const entranceCard = document.querySelectorAll('.entranceCard')
const entranceCardArray = Array.from(entranceCard)
// Array of entrace cards is needed since indexOf method does not work on NodeList
const hoveringVideo = document.querySelectorAll('.hoveringVideo h3 span')
const floatingGallery = document.querySelector('#floatingGallery')
const floatingGalleryVideos = document.querySelectorAll('#floatingGallery video')
const floatingGalleryNames = document.querySelectorAll('.names')
const futureVision = document.querySelector('#futureVision')
const footer = document.querySelectorAll('footer')
const newsLetterForm = document.querySelector('#newsLetter form')
const newsLetter = document.querySelector('#newsLetter form input')
const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi)
const imageUrls = ['images/campaignHeader.avif', 'images/parkImageCarousel.avif', 'images/greeneryCarousel.avif']
const carouselHeadingTexts = ['Roots of the Rail Park End-of-Year Fundraiser<br><a href="#">Make a donation today!</a>', 'Phase One is free & open daily<br><a href="#">Plan your visit</a>', 'Turning historic tracks into an unparalleled park.<br><a href="#">See the full version</a>']
let i = 0
let j = 0

function isEmailValid(emailID) {
    return (emailID.match(emailRegex) !== null);
}

function formSubmit(e) {
    e.preventDefault()
    if (isEmailValid(newsLetter.value.trim())) {
        footer[0].innerHTML = '<h5>Thank you for subscribing!</h5>'
    }
    else {
        footer[0].innerHTML = '<h5>The email you entered is not valid</h5>'
    }
}

function parallax() {
    let scrollValue = window.scrollY;
    console.log(scrollValue)

    if (scrollValue >= 50 && j == 0) {
        // console.log("true");
        navbar.style.transform = "translateY(-135px)";
    }
    else {
        navbar.style.transform = "translateY(0px)"
    }

    if (entrancesHeading[0].hasAttribute('style') && scrollValue >= 319 && window.innerWidth >= 980) {
        entrancesHeading[0].removeAttribute('style')
        setTimeout(() => {
            entrancesHeading[1].removeAttribute('style')
        }, 150)
    }
    else if (entrancesHeading[0].hasAttribute('style') && window.innerWidth < 980) {
        entrancesHeading[0].removeAttribute('style')
        entrancesHeading[1].removeAttribute('style')
    }

    if (hoveringVideo[0].hasAttribute('style') && scrollValue >= 1317) {
        hoveringVideo[0].removeAttribute('style')
        setTimeout(() => {
            hoveringVideo[1].removeAttribute('style')
        }, 100)
        setTimeout(() => {
            hoveringVideo[2].removeAttribute('style')
        }, 200)
        setTimeout(() => {
            hoveringVideo[3].removeAttribute('style')
        }, 300)
    }

    if (window.innerWidth > 980) {
        floatingGalleryNames.forEach(floatingName => {
            floatingName.style.marginTop = `${(scrollValue - 1750) / 10}px`
        })

        futureVision.style.marginTop = `${(scrollValue - 2300) / 5}px`
    }
    else if (window.innerWidth <= 980) {
        floatingGalleryNames.forEach(floatingName => {
            floatingName.style.marginTop = `${(scrollValue - 2900) / 10}px`
        })

        futureVision.style.marginTop = `${(scrollValue - 3350) / 5}px`
    }


    heading.style.marginTop = `-${scrollValue / 1.25}px`
    gallery.style.marginTop = `-${scrollValue}px`
}

function hamburgerMenuHelper() {
    if (j == 0) {
        hamUpper.style.transform = 'rotate(45deg) translateY(0.75rem)'
        hamLower.style.transform = 'rotate(-45deg) translateY(-0.75rem)'
        hamUpper.classList.add('hamCross')
        hamLower.classList.add('hamCross')
        mainPage.style.display = 'none'
        footer[0].style.display = 'none'
        body.style.backgroundColor = '#131313'
        navLinks.style.display = 'none'
        donateBtn.id = 'donateBtnHam'
        navbar.style.borderBottom = '0.5px solid #424242'
        navbar.style.backgroundColor = '#131313'
        navSearch.style.display = 'flex'
        footer[1].style.display = 'none'
        setTimeout(() => {
            navSearch.style.opacity = '1'
        }, 150)
        hamContent.style.display = 'grid'
        setTimeout(() => {
            contentFirst.style.opacity = '1'
            contentFirst.style.transform = 'translateY(0px)'
        }, 200)
        setTimeout(() => {
            contentSecond.style.opacity = '1'
            contentSecond.style.transform = 'translateY(0px)'
        }, 250)
        setTimeout(() => {
            contentThird.style.opacity = '1'
            contentThird.style.transform = 'translateY(0px)'
        }, 300)
        setTimeout(() => {
            contentFourth.style.opacity = '1'
            contentFourth.style.transform = 'translateY(0px)'
        }, 350)
        j += 1
    }
    else if (j == 1) {
        hamUpper.removeAttribute('style')
        hamLower.removeAttribute('style')
        mainPage.style.display = 'block'
        body.removeAttribute('style')
        navLinks.removeAttribute('style')
        navSearch.removeAttribute('style')
        hamContent.removeAttribute('style')
        navbar.removeAttribute('style')
        contentFirst.removeAttribute('style')
        contentSecond.removeAttribute('style')
        contentThird.removeAttribute('style')
        contentFourth.removeAttribute('style')
        hamUpper.classList.remove('hamCross')
        hamLower.classList.remove('hamCross')
        footer[0].removeAttribute('style')
        footer[1].removeAttribute('style')
        donateBtn.id = 'donateBtn'
        j -= 1
    }
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
    }, 750)
    setTimeout(() => {
        image.src = imageUrls[i]
        image.classList.add('imgFadeIn')
        image.style.opacity = "1"
    }, 900)
    if (i == 1) {
        setTimeout(() => {
            hoursBadge.style.opacity = '1'
        }, 1400)
    }
    else {
        hoursBadge.removeAttribute('style')
    }
}

function carouselTextChange(headingText) {
    headingText.style.transform = "translateY(20px)"
    headingText.style.opacity = "0"
    setTimeout(() => {
        headingText.innerHTML = carouselHeadingTexts[i]
        headingText.style.transform = "translate(0px)"
        headingText.style.opacity = "1"
    }, 900)

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

function cursorVideo(e) {
    // videos[2].style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    videos[2].style.left = `${e.clientX}px`
    videos[2].style.top = `${e.clientY}px`
    console.log(e.clientX)
    console.log(e.clientY)
    let rect = videos[2].getBoundingClientRect()
    console.log(rect.top, rect.right)
}

window.addEventListener('scroll', parallax)
window.addEventListener('load', () => {
    mainPage.style.height = `calc(${videos[5].getBoundingClientRect().bottom}px + 22rem)`
})
window.addEventListener('resize', () => {
    mainPage.style.height = `calc(${videos[5].getBoundingClientRect().bottom}px + 22rem)`
    location.reload()
    console.log('resize')
})
ham.addEventListener('click', hamburgerMenuHelper)
carouselNext.addEventListener('click', next)
carouselBack.addEventListener('click', back)
entranceCard.forEach(card => {
    let video = videos[entranceCardArray.indexOf(card)]
    card.addEventListener('mouseenter', () => {
        video.play()
    })
    card.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0
    })
})
hoveringVideo[1].addEventListener('mousemove', cursorVideo)
hoveringVideo[1].addEventListener('mouseenter', () => {
    videos[2].play()
    videos[2].style.opacity = '1'
})
hoveringVideo[1].addEventListener('mouseleave', () => {
    videos[2].pause()
    videos[2].currentTime = 0
    videos[2].style.opacity = '0'
})
floatingGalleryVideos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play()
    })
    video.addEventListener('mouseleave', () => {
        video.pause()
        video.currentTime = 0
    })
})

newsLetter.addEventListener('focus', () => {
    document.querySelector('#newsLetter form').style.borderBottom = '1px solid #112118'
})
newsLetter.addEventListener('focusout', () => {
    document.querySelector('#newsLetter form').removeAttribute('style')
})

newsLetterForm.addEventListener('submit', formSubmit)