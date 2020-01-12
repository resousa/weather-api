$(document).ready(function() {
  var getCity = $("#city");
  var getIcon = $("#icon");
  var getTemp = $("#temp");
  var getHumidity = $("#humidity");
  var getWind = $("#wind");
  var getUv = $("#uv");

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
      console.log(response);
    });
  });
});
