const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const hundreds = document.querySelector('#msHundreds');
const ms = document.querySelector('#msTens');

let intervalId;

btnStart = document.getElementById('start');
btnStart.addEventListener('click', function(){
    let currTens = 0;
    let currOnes = 0;
    let currHundreds = 0;
    let currMs = 0;
    setInterval(function(){
        tens.textContent = currTens;
        ones.textContent = currOnes;
        hundreds.textContent = currHundreds;
        ms.textContent = currMs;
        if(currMs === 9){
            currMs = 0;
            currHundreds ++;
        }else{
            currMs++;
        }
        if(currHundreds === 9){
            currHundreds = 0;
            currOnes ++;
        }
        if(currOnes === 9){
            currOnes = 0;
            currTens ++;
        }

    }, 10);
    // console.log(intervalId);
});

btnReset = document.getElementById('reset');
btnStart.addEventListener('click', function(){
    clearInterval(intervalId);
})