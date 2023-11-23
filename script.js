const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


bar.addEventListener('click', () => {
    nav.classList.add('active')
})

close.addEventListener('click', () => {
    nav.classList.remove('active')
})


// Counter Code


let count = document.getElementsByClassName('count');
let numbers = document.getElementById('numbers');

let inc = [];

function intervalFunc() {
    for (let index = 0; index < count.length; index++) {

        inc.push(parseInt(count[index].innerHTML))

        if (inc[index] != count[index].getAttribute('max-data')) {
            inc[index]++;
        }

        count[index].innerHTML = inc[index]


    }
}


window.onscroll = function () {

   var timer = setInterval(() => {

        let topElem = numbers.offsetTop;
        let bottomElem = numbers.offsetTop + numbers.clientHeight;
        let topScreen = window.scrollY;
        let bottomScreen = window.scrollY + window.innerHeight;

        if (bottomScreen > topElem && topScreen < bottomElem) {
            intervalFunc();
        } else {
            clearInterval(timer);

        }
    }, 100)

}





















