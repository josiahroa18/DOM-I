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
        }
    }
    updateTimer(){
        tens.textContent = this.currTens;
        ones.textContent = this.currOnes;
        hundreds.textContent = this.currHundreds;
        ms.textContent = this.currMs;
        this.updateMs();
        this.updateHundreds();
        this.updateOnes();
    }
    startTimer(){
        const intervalID = setInterval(() => {
            if(this.currTens === 1){
                this.updateTimer();
                clearInterval(intervalID);
                // Change color
            }else{
                this.updateTimer();
            }
        }, 10);
    }
}

btnStart = document.getElementById('start');
btnStart.addEventListener('click', () => {
    let timer = new Timer();
    timer.startTimer();
});

