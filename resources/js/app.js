const orange = document.getElementById('orange')
const blue = document.getElementById('blue')
const orangeDiv = document.getElementsByClassName('orange')
const blueDiv = document.getElementsByClassName('blue')
const imgShowcase = document.getElementsByClassName('img-showcase')
const orangeDetails = document.getElementsByClassName('orange-details')
const blueDetails = document.getElementsByClassName('blue-details')
const details = document.getElementsByClassName('img-details')
const exitOrange = document.getElementById('exitOrange')
const exitBlue = document.getElementById('exitBlue')

orange.addEventListener('click', () => {
    if (blueDetails[0].classList.contains('blue-details-display')) {
        blueDetails[0].classList.remove('blue-details-display')
        setTimeout(() => {
            orangeDetails[0].classList.add('orange-details-display')
        }, 300)
        
    } else {
        details[0].classList.add('img-details-hide')
        setTimeout(() => {
            orangeDetails[0].classList.add('orange-details-display')
        }, 300)
    }
})

exitOrange.addEventListener('click', () => {
    orangeDetails[0].classList.remove('orange-details-display')
    setTimeout(() => {
        details[0].classList.remove('img-details-hide')
    }, 300)
})

blue.addEventListener('click', () => {
    if(orangeDetails[0].classList.contains('orange-details-display')) {
        orangeDetails[0].classList.remove('orange-details-display')
        setTimeout(() => {
            blueDetails[0].classList.add('blue-details-display')
        }, 300)
    }else {
        details[0].classList.add('img-details-hide')
        setTimeout(() => {
            blueDetails[0].classList.add('blue-details-display')
        }, 300)
    }
})

exitBlue.addEventListener('click', () => {
    blueDetails[0].classList.remove('blue-details-display')
    setTimeout(() => {
        details[0].classList.remove('img-details-hide')
    }, 300)
})