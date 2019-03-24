const BASE_SIZE = 100
function setRem() {
    let scale = document.documentElement.clientWidth/750;
    document.documentElement.style.fontSize = BASE_SIZE * Math.min(scale, 2) + 'px'
}

// init
setRem()

window.onresize = setRem;