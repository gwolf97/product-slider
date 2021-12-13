//variables
let thumbnails = document.querySelector("section");
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

//Autoplay Slider
function autoplay(){
    if (slider.scrollLeft > (maxScrollLeft - 1)){
        sleep(1000)
        slider.scrollLeft -= maxScrollLeft
    }
    else{
        slider.scrollLeft += 1
    }
}

let play = setInterval(autoplay, 50)

//pause the slider on hover
thumbnails.addEventListener("mouseover", function(){
    clearInterval(play)
})

thumbnails.addEventListener("mouseout", function(){
    return play = setInterval(autoplay, 50)
})

//pause function

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }