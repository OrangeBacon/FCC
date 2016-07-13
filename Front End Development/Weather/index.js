function ip() {
  $.getJSON("http://ipinfo.io/json", '', function(data) {
    console.log(data)
    $('#loc').html(data.city + ', ' + data.region);
    $.getJSON('http://api.openweathermap.org/data/2.5/weather?units=metric&q=' + data.city + ',' + data.country + '&appid=18aaf1c0e4fd4981dc69352bcc92bba6', '', function(data) {
      $('#weather').html(data.weather[0].description);
      $('#temp').html(Math.round(data.main.temp) + '°C')
      $('#temp').attr('data-temp', data.main.temp)
      $('#icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png')
      console.log(data)
    })
  });
}
if (window.location.protocol != "http:")
    window.location.href = "http:" + window.location.href.substring(window.location.protocol.length);
$(document).ready(function() {
  ip();
  $('#temp').click(function() {
    if ($('#temp').text().indexOf('°C') != -1) {
      $('#temp').text(Math.round($('#temp').attr('data-temp') * 9 / 5 + 32).toString() + '°F')
    } else {
      $('#temp').text(Math.round($('#temp').attr('data-temp')).toString() + '°C')
    }
  })
})