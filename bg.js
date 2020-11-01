const body = document.querySelector("body");

const IMG_NUMBER = 5;

// function handleImgLoad(){}

function paintImg(imgNumber){
    const image = new Image()
    image.src = `images/${imgNumber}.jpg`
    body.appendChild(image)    
    // image.addEventListener("loadend", handleImgLoad)
    image.classList.add("bgImage")
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER) + 1;
    return number
}


function init(){
    const randomNumber = genRandom()
    paintImg(randomNumber);
}

init();