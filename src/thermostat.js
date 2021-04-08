
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

    powerSavingOff() {
        this.powerSaving = false;
    }
}
