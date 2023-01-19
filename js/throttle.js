const textRef = document.querySelector('.js-throttle');
let mouseCallBackCounter = 0;

window.addEventListener('mousemove', _.throttle(sayHallo,200));

function sayHallo(){
    mouseCallBackCounter += 1;
    textRef.textContent = mouseCallBackCounter;
}



