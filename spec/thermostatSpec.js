
describe("Feature Test:", function() {
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it("starts the temperature at 20 degrees", function(){

        expect(thermostat.getTemperature()).toEqual(20)
    });

    it("can increase the temperature by 1-degree increments", function() {
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(21);
    });

    it("can decrease the temperature by 1-degree increments", function() {
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(19);
    });

    it("prevents temperature from dropping below 10 degrees", function(){
        let counter = 1;
        while (counter <= 11) {
            thermostat.down();
            counter ++
        }
        expect(thermostat.getTemperature()).toEqual(10);
    });

    it("starts with power-saving mode on", function() {
        expect(thermostat.powerSaving).toEqual(true);
    });

    it("has max temp of 25 with power-saving on", function() {
        for(let i = 1; i <=6; i ++) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toEqual(25);
    });

    it("can turn power-saving mode off", function() {
        thermostat.powerSavingOff();
        expect(thermostat.powerSaving).toEqual(false);
    });
});
