const couterElem = document.getElementById('counter');
const decreseElem = document.getElementById('decrese');
const increseElem = document.getElementById('increse');
const resetElem = document.getElementById('reset');

let counter = 0;
increseElem.addEventListener('click', (event)=> {
    counter +=1;
    couterElem.innerHTML = counter;
    if (counter >= 1 ) {
        couterElem.style.color = 'green';
    }
})

decreseElem.addEventListener('click', (event)=> {
    counter -= 1;
    couterElem.innerHTML = counter;
    if (counter < 0 ) {
        couterElem.style.color = 'red';
    }            
})

resetElem.addEventListener('click', (event)=> {
    counter = 0;
    couterElem.innerHTML = counter;
    if (counter === 0 ) {
        couterElem.style.color = 'black';
    }
})