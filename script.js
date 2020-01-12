$(document).ready(function() {
  var getCity = $("#city");
  var getDate = $("#date");
  var getIcon = $("#icon");
  var getTemp = $("#temp");
  var getHumidity = $("#humidity");
  var getWind = $("#wind");
  var apiKey = "6b16d9074f090423f686e62bcae610ff";

  $("#search").on("click", function() {
    var cityURL = $("#userCity").val();

    var queryURL =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      cityURL +
      "&units=imperial&appid=" +
      apiKey;
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        $(getCity).text(response.name);
        $(getDate).text(moment().format('MMMM Do YYYY, h:mm a'));
        $(getIcon).attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png");
        $(getTemp).text("Temp: " + response.main.temp + "F");
        $(getHumidity).text("Humidity: " + response.main.humidity + "%");
        $(getWind).text("Wind: " + response.wind.speed + "MPH");
       });
    });
});