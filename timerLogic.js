export default class timerLogic {
    constructor() {
        this.ms = 0;
    }
    // msUpdate() {
    //     let msDisplay = this.ms % 10;
    //     return msDisplay;
    // }
    // csUpdate() {
    //     const csDisplay = (this.ms / 10) % 10;
    //     return csDisplay;
    // }
    // dsUpdate() {
    //     const dsDisplay = (this.ms / 100) % 10;
    //     return dsDisplay;
    // }
    msUpdate() {
        let msDisplay;
        if((this.ms % 100) < 10) {
            msDisplay = '0' + (this.ms % 100);
        }
        else {
            msDisplay = this.ms % 100;
        }
        return msDisplay;
    }
    secondsUpdate() { 
        let seconds = Math.floor(this.ms / 100);
        let secondsDisplay;
        if((seconds % 60) < 10) {
            secondsDisplay = '0' + (seconds % 60);
        }
        else {
            secondsDisplay = seconds % 60;
        }
        return secondsDisplay;
    }

    minutesUpdate() {
        let seconds = Math.floor(this.ms / 100);
        let minutesDisplay;
        const minutes = Math.floor(seconds / 60);
        if((minutes % 60) < 10) {
            minutesDisplay = '0' + (minutes % 60);
        }
        else {
            minutesDisplay = minutes % 60;
        }
        return minutesDisplay;
    }

    hoursUpdate() {
        let seconds = this.ms / 1000;
        let hoursDisplay;
        const hours = Math.floor(seconds / 3600);
        if(hours < 10) {
            hoursDisplay = '0' + hours;
        }
        return hoursDisplay;
    }
}