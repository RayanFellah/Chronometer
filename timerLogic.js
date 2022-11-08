export default class timerLogic {
    secondsUpdate(seconds) {
        let secondsDisplay = seconds % 60;
        if((seconds % 60) < 10) {
            secondsDisplay = '0' + (seconds % 60);
        }
        return secondsDisplay;
    }

    minutesUpdate(minutes, seconds) {
        let minutesDisplay = minutes;
        minutes = Math.floor(seconds / 60);
        if((minutes % 60) < 10) {
            minutesDisplay = '0' + (minutes % 60);
        }
        else {
            minutesDisplay = minutes % 60;
        }
        return minutesDisplay;
    }

    hoursUpdate(hours, seconds) {
        let hoursDisplay = hours;
        hours = Math.floor(seconds / 3600);
        if(hours < 10) {
            hoursDisplay = '0' + hours;
        }
        return hoursDisplay;
    }
}