const thermostat = new Thermostat();

$( document ).ready(function() {

  // Two lines to make sure initial values are displayed even if code changes default settings from ones in the initial HTML:
  $('#temperature').text(thermostat.getTemperature());
  $('#usage').text(thermostat.currentUsage());

  $('#up').click(function() {
    thermostat.up();
  });

  $('#down').click(function() {
    thermostat.down();
  });

  $('#reset').click(function() {
    thermostat.reset();
  });

  $('#power-saving').click(function() {
    thermostat.togglePS();
    if (thermostat.powerSaving) {
      $('#on-off').text("Off");
      $('#power-saving').addClass("off");
      $('#power-saving').removeClass("on");
    } else {
      $('#on-off').text("On");
      $('#power-saving').addClass("on");
      $('#power-saving').removeClass("off");
    }
  });
 
  $('button').click(function() {
    $('#temperature').text(thermostat.getTemperature());
    $('#usage').text(thermostat.currentUsage());
  });

});
