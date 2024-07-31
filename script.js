let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-value"));
    let Duration = Math.floor(interval / endValue);
    let counter = setInterval(function (){
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
            clearInterval(counter);
        }
    }, Duration);

});






