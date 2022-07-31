const prev = document.getElementById("btnPrev");
const next = document.getElementById("btnNext");

const imgSrc = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];

function prevImg () {
    console.log("PREVIOUS BUTTON");
};

function nextImg () {
    console.log("NEXT BUTTON");
};

prev.addEventListener("click", prevImg);
next.addEventListener("click", nextImg);
