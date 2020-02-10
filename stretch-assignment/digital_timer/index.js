const tens = document.querySelector('#secondTens');
const ones = document.querySelector('#secondOnes');
const hundreds = document.querySelector('#msHundreds');
const ms = document.querySelector('#msTens');
const digits = document.querySelectorAll('.digit');

class Timer{
    constructor(){
        this.currTens = 0;
        this.currOnes = 0;
        this.currHundreds = 0;
        this.currMs = 0;
        this.stop = false;
    }
    updateMs(){
        if(this.currMs === 9){
            this.currMs = 0;
            this.currHundreds ++;
        }else{
            this.currMs ++;
        }
    }
    updateHundreds(){
        if(this.currHundreds > 9){
            this.currHundreds = 0;
            this.currOnes ++;
        }
    }
    updateOnes(){
        if(this.currOnes > 9){
            this.currOnes = 0;
            this.currTens ++;
            for(let i=0; i<digits.length; i++){
                digits[i].style.color = "red";
            }
        }
    }
    assignValues(){
        tens.textContent = this.currTens;
        ones.textContent = this.currOnes;
        hundreds.textContent = this.currHundreds;
        ms.textContent = this.currMs;
    }
    updateTimer(){
        this.assignValues();
        this.updateMs();
        this.updateHundreds();
        this.updateOnes();
    }
    startTimer(){
        const intervalID = setInterval(() => {
            if(this.currTens === 1 || this.stop){
                this.updateTimer();
                clearInterval(intervalID);
            }else{
                this.updateTimer();
            }
        }, 10);
    }
    reset(){
        this.stop = true;
        this.currTens = 0;
        this.currOnes = 0;
        this.currHundreds = 0;
        this.currMs = 0;
        this.assignValues();
        for(let i=0; i<digits.length; i++){
            digits[i].style.color = "aqua";
        }
    }
    start(){
        this.stop = false;
    }
}

let timer = new Timer();
btnStart = document.getElementById('start');
btnStart.addEventListener('click', () => {
    timer.start();
    timer.startTimer();
});

btnReset = document.getElementById('reset');
btnReset.addEventListener('click', () => {
    timer.reset();
})

