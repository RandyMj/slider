const prev = document.getElementById("btnPrev");
const next = document.getElementById("btnNext");

const imgSrc = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

let element = document.getElementById("img_container");
let i = 0;

function prevImg () {
    if(i == 0) {
        i = imgSrc.length - 1;
    } else if (i <= imgSrc.length -1) {
        i--;
    }
    element.innerHTML = `<div id="img_container">
        <img src="./src/assets/${imgSrc[i]}" alt="">
        </div>`
};

function nextImg () {
    if(i < imgSrc.length - 1) {
        i++
    } else if (i == imgSrc.length -1) {
        i = 0;
    }
    element.innerHTML = `<div id="img_container">
        <img src="./src/assets/${imgSrc[i]}" alt="">
        </div>`
};

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);
