console.log('hello')

$(document).ready(function() {
  $('#show-data').on('click', function () {
    showcityname();
    function showcityname() {
      {
        var city_name;
        var icode;//icon code
        var temp;
        var pressure;
        var weather_description;
        var tempFormat = "&units=metric";
        var apiKey = "cdf05d929ed5cfa526764c43d2b832d2";
        }
      $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-36.84&lon=174.76&exclude=hourly,current,minutely&appid=cdf05d929ed5cfa526764c43d2b832d2&units=metric",function(data) {
        console.log(data)
        data.daily.forEach(day => {
          var dayDomObj = $('<div class ="day">')
          dayDomObj.html(`${(new Date(day.dt*1000).toLocaleString()).substr(0,10)} temprature: ${day.temp.day} °C `)
          $('#fourDayData').append(dayDomObj)
        });
      });
    }
  });
})



// function bla(){
//   var old = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + longit + tempFormat + "&appid=" + apiKey
        
  
//   dt= 1589760000;new Date(dt*1000).toLocaleString(); 
//   $.getJSON("https://api.openweathermap.org/data/2.5/onecall?lat=-36.84&lon=174.76&exclude=hourly,current,minutely&appid=cdf05d929ed5cfa526764c43d2b832d2&units=metric") 
// }


// function bla2(){
//   city_name = data["name"];
//         country_name = data["sys"]["country"];
//         icode = data["weather"][0]["icon"];
//         weather_description = data["weather"][0]["description"];
//         temp = data["main"]["temp"];
//         pressure = data["main"]["pressure"];
//         wind_speed = data["wind"]["speed"];
//         sunrise_t = data["sys"]["sunrise"];

// var icon = ("http://openweathermap.org/img/w/" + icode + ".png"); 
// var image = 
//         $("#cityname").html(city_name + " &#40;" + country_name + "&#41; " + "has " + weather_description + ' ');
// $("#cityname").append('<img src="' + icon + '">');

//         $(".pressure").html(pressure + " mBar");
//         $(".wind-spd").html(wind_speed + " m/s");

//         $(".temp").html(temp);

   

//         // Function to change t. measurement - Celsius/Fahrenheit

//         $('.fahrenheit').on('click', function() {
//           if ($(".fahrenheit").hasClass("active")) {
//             temp = temp;
//           } else {
//             temp = temp * 9 / 5 + 32;
//           }
//           $(".temp").html(temp.toPrecision(4));
//           $(".celsius").removeClass("active");
//           $(".fahrenheit").addClass("active");
//         });

//         $('.celsius').on('click', function() {
//           if ($(".celsius").hasClass("active")) {
//             temp = temp;
//           } else {
//             temp = (temp - 32) * 5 / 9;
//           }
//           $(".temp").html(temp.toPrecision(4));
//           $(".fahrenheit").removeClass("active");
//           $(".celsius").addClass("active");
//         });

//         // end of unction to change t. measurement - Celsius/Fahrenheit

//         // function to convert sunrise UTC time into human readable time
//         var sec = sunrise_t;
//         var date = new Date(sec * 1000);
//         var timestr = date.toLocaleTimeString();
//         console.log(date, timestr);

//         $(".sunrise-time").html("Sunrise at " + timestr);
//         // end of function to convert sunrise UTC time into human readable time
// }