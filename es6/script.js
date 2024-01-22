const serchInput = document.querySelector('.search');
const display = document.querySelector('.result');
const thanks = document.querySelector('.thanks');

function show() {
    display.innerHTML = this.value;
    // setTimeout(() => {
    //     thanks.innerHTML = `You have typed ${this.value}`;
    // }, 1000);
    setTimeout(function() {
        thanks.innerHTML = `You have typed ${this.value}`;
    }, 1000);
}
serchInput.addEventListener('keyup', show);