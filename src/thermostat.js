
class Thermostat {
    constructor() {
        this.temperature = 20;
        this.minTemperature = 10
    }

    getTemperature() {
        return this.temperature;
    }

    up() {
        this.temperature ++;
    }

    down() {
        if (this.temperature === this.minTemperature) {
            return
        } else {
            this.temperature --;
        }
    }
}
