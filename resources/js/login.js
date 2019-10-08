const square = document.getElementsByClassName('square')
const bg = document.getElementsByClassName('bg')
const newSquare = document.createElement("div")
const loginBg = document.getElementsByClassName('login')
const label = document.getElementsByTagName('label')
const img = document.getElementById('img')
const form = document.getElementsByClassName('form')
const formLabel = document.getElementById('form-label')
img.addEventListener('click', () => {
    img.classList.add('hide-img')
    form[0].classList.add('form-unhide')
})

for (let i = 0; i < 25; i++) {
    newSquare.setAttribute("class", "square")
    bg[0].appendChild(newSquare.cloneNode())
}
for (let i = 0; i < square.length; i++) {
    let red = Math.round(Math.random() * 150)
    let green = Math.round(Math.random() * 150)
    let blue = Math.round(Math.random() * 150)
    square[i].style.backgroundColor = `rgb(${blue},${red},${green})`
}
for (let i = 0; i < square.length; i++) {
    square[i].addEventListener('click', (e) => {
        let red = Math.round(Math.random() * 150)
        let green = Math.round(Math.random() * 150)
        let blue = Math.round(Math.random() * 150)
        let d = new Date()
        let seconds = d.getSeconds()
        square[i].style.backgroundColor = `rgb(${blue},${red},${green})`
        loginBg[0].style.background = `rgb(${blue},${red},${green})`
        loginBg[0].classList.toggle('bg-transition')
        loginBg[0].style.transition = "0.5s"
        for (let i = 0; i < label.length; i++) {
            label[i].style.color = "white"
            formLabel.style.color = "white"
        }
    })
}