const slider = document.getElementById('slider')
let say = 1
function handleSlider(){
    say++
    slider.style.background = `url('./img${say}.jpg') center/cover`
    if(say > 2) say = 0
}
function handleSliderBack(){
    say--
    if(say < 1) say = 3
    slider.style.background = `url('./img${say}.jpg') center/cover`
}
setInterval(handleSlider, 1000)