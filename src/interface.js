const thermostat = new Thermostat();

$( document ).ready(function() {

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=16f05f6a3f739dc78054d520cabab8a0', function(data){
    console.log(data);
  })

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
      $('#power-saving').attr('class', 'off');
    
    } else {
      $('#on-off').text("On");
      $('#power-saving').attr('class', 'on');
    }
  });
 
  $('button').click(function() {
    $('#temperature').text(thermostat.getTemperature());
    $('#usage').text(thermostat.currentUsage());
    $('#usage').attr('class', thermostat.currentUsage());
  });

});
