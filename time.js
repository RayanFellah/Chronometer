import timerLogic from "./timerLogic.js"
class TimeManager {
    constructor(timerLogic) {
        this.timerLogic_ = timerLogic;
    }

    interval = null;
    startButton = document.getElementById("start");
    stopButton = document.getElementById("stop");
    resetButton = document.getElementById("reset");
    lapButton = document.getElementById("lap");

    #resetTime() {
        this.timerLogic_.ms = 0;
    }

    hiddenElement() {
        let time = document.getElementById("time");
        const spanMS = document.createElement("span");
        spanMS.textContent = ".00";
        time.appendChild(spanMS);
        document.body.appendChild(time);
    }

    displayTime() {
        let time = document.getElementById("time")
        time.textContent = `${this.timerLogic_.hoursUpdate()}:${this.timerLogic_.minutesUpdate()}:${this.timerLogic_.secondsUpdate()}.${this.timerLogic_.msUpdate()}`;
        if(this.timerLogic_.hoursUpdate().toString().length >= 4) {
            clearInterval(this.interval);
            this.stopButton.disabled = true;
        }
    }

    start() {
        this.startButton.addEventListener('click', (e) => {
            this.startButton.hidden = true;         // je cache le bouton
            this.lapButton.hidden = false;
            this.interval = setInterval((e)=>{
                // this.timerLogic_.seconds = this.timerLogic_.ms / 1000; 
                this.displayTime();
                this.timerLogic_.ms+= 1;
            }, 10);
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
            const removeLapButton = document.createElement("button");
            removeLapButton.setAttribute("id", "remove-lap-button")         // a continuer
            lap.textContent = `${this.timerLogic_.hoursUpdate()}:${this.timerLogic_.minutesUpdate()}:
                               ${this.timerLogic_.secondsUpdate()}.${this.timerLogic_.msUpdate()}`;
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