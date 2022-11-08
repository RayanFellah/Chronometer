import timerLogic from "./timerLogic.js"
class TimeManager {
    constructor(timerLogic) {
        this.seconds = 0, this.minutes = 0, this.hours = 0;
        this.timerLogic_ = timerLogic;
    }

    interval = null;
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    lapButton = document.getElementById("lap");
    #resetTime() {
        this.seconds = 0;
        this.minutes = 0;
        this.hours = 0;
    }

    displayTime() {
        let time = document.getElementById("time")
        time.textContent = `${this.timerLogic_.hoursUpdate(this.hours, this.seconds)}:${this.timerLogic_.minutesUpdate
            (this.minutes, this.seconds)}:${this.timerLogic_.secondsUpdate(this.seconds)}`;
        if(this.timerLogic_.hoursUpdate(this.hours, this.seconds).toString().length >= 4) {
            clearInterval(this.interval);
            this.stopButton.disabled = true;
        }
    }

    start() {
        this.startButton.addEventListener('click', (e) => {
            this.startButton.hidden = true;         // je cache le bouton
            this.lapButton.hidden = false;
            this.interval = setInterval((e)=>{ 
                this.seconds+=200;
                this.displayTime();
            }, 1000);
        }, false);
    }

    stop() {
        this.stopButton.addEventListener('click', () => {
            this.startButton.hidden = false;
            this.lapButton.hidden = true;
            clearInterval(this.interval);
            this.displayTime();
        });
    }

    reset() {
        this.resetButton.addEventListener('click', () => {
            this.startButton.hidden = false;
            this.lapButton.hidden = true;
            if(this.stopButton.disabled == true) {
                this.stopButton.disabled = false;
            }
            this.#resetTime();
            this.displayTime();
            clearInterval(this.interval);
            document.getElementById("lap-container").innerHTML = "";
        });
    }

    lap() {
        this.lapButton.addEventListener("click", () => {
            const lapsContainer = document.getElementById("lap-container");
            const lap = document.createElement("p");
            lap.textContent = `${this.timerLogic_.hoursUpdate(this.hours, this.seconds)}:${this.timerLogic_.minutesUpdate
                                (this.minutes, this.seconds)}:${this.timerLogic_.secondsUpdate(this.seconds)}`;
            lapsContainer.appendChild(lap);
            document.body.appendChild(lapsContainer);
        })
    }
    activate() {
        this.displayTime();
        this.start();
        this.stop();
        this.reset();
        this.lap();
    }        
}

window.onload = () => {
    const timeManager = new TimeManager(new timerLogic);
    timeManager.activate();
}