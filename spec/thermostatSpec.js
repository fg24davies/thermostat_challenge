
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
});