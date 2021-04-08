
describe("Feature Test:", function() {
    var thermostat;

    beforeEach(function(){
        thermostat = new Thermostat();
    });

    it("starts the temperature at 20 degrees", function(){

        expect(thermostat.temperature()).toEqual(20)
    });
});