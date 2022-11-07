import timerLogic from "./timerLogic.js"
class TimeManager {
    constructor() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    interval = null;
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");

    displayTime() {
        let time = document.getElementById("time")
        time.textContent = `${this.hoursUpdate()}:${this.minutesUpdate()}:${this.secondsUpdate()}`;
        if(this.hoursUpdate().toString().length >= 4) {
            clearInterval(this.interval);
            this.stopButton.disabled = true;
        }
    }

    secondsUpdate() {
        let secondsDisplay = this.seconds % 60;
        if((this.seconds % 60) < 10) {
            secondsDisplay = '0' + (this.seconds % 60);
        }
        return secondsDisplay;
    }

    minutesUpdate() {
        let minutesDisplay = this.minutes;
        this.minutes = Math.floor(this.seconds / 60);
        if((this.minutes % 60) < 10) {
            minutesDisplay = '0' + (this.minutes % 60);
        }
        else {
            minutesDisplay = this.minutes % 60;
        }
        return minutesDisplay;
    }

    hoursUpdate() {
        let hoursDisplay = this.hours;
        this.hours = Math.floor(this.seconds / 3600);
        if(this.hours < 10) {
            hoursDisplay = '0' + this.hours;
        }
        return hoursDisplay;
    }

    start() {
        this.startButton.addEventListener('click', (e)=>{
            this.startButton.disabled = true;
            this.interval = setInterval((e)=>{ 
                this.seconds++;
                this.displayTime();
            }, 1000);
        }, false);
    }

    stop() {
        this.stopButton.addEventListener('click', ()=>{
            this.startButton.disabled = false;
            clearInterval(this.interval);
            this.displayTime();
        });
    }

    reset() {
        this.resetButton.addEventListener('click', () => {
            this.startButton.disabled = false;
            if(this.stopButton.disabled == true) {
                this.stopButton.disabled = false;
            }
            this.seconds = 0;
            this.minutes = 0;
            this.hours = 0;
            this.displayTime();
            clearInterval(this.interval);
        });
    }

    activate() {
        this.displayTime();
        this.start();
        this.stop();
        this.reset();
    }        
}

window.onload = () => {
    const timeManager = new TimeManager();
    timeManager.activate();
}