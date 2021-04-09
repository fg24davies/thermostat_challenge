
class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minTemperature = 10;
        this.maxTemperature = 25;
        this.powerSaving = true;
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        if (this.temperature < this.maxTemperature) {
            this.temperature ++;
        }  
    }

    down() {
        if (this.temperature === this.minTemperature) {
            return
        } else {
            this.temperature --;
        }
    }

    togglePS() {
        if (this.powerSaving) {
            this.powerSaving = false;
            this.maxTemperature = 32
        } else {
            this.powerSaving = true
            this.maxTemperature = 25
            if (this.temperature > 25) {
                this.temperature = 25;
            }
        }
    }

    reset() {
        this.temperature = 20;
    }

    currentUsage() {
        if(this.temperature < 18) {
            return 'Low';
        } else if(this.temperature > 25) {
            return 'High';
        } else {
            return 'Medium';
        }
    }
 }