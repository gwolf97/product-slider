//variables
let thumbnails = document.querySelector(".thumbnail");
let slider = document.querySelector("#slider")
let buttonRight = document.querySelector("#slide-right")
let buttonLeft = document.querySelector("#slide-left")

buttonLeft.addEventListener("click", function(){
    slider.scrollLeft -= 125;
})

buttonRight.addEventListener("click", function(){
    slider.scrollLeft += 125;
})

const maxScrollLeft = slider.scrollWidth - slider.clientWidth
alert(maxScrollLeft)