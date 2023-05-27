var weatherholder = document.querySelector("#weather");
var subitem1holder = document.querySelector("#subitem1");
var subitem2holder = document.querySelector("#subitem2");
var subitem3holder = document.querySelector("#subitem3");

// https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc

var res = null;
var data = null;

subitem1holder.innerHTML = "Loaded Item 1"; 
subitem2holder.innerHTML = "Loaded Item 2"; 
subitem3holder.innerHTML = "Loaded Item 3"; 

async function getapi(url) {
  res = await fetch(url);
  data = await res.json();
  console.log(data);
  subitem1holder.innerHTML = "<h3><b>" + data.weatherForecast[0].week + "</b></h3><p>🌡️ " + data.weatherForecast[0].forecastMaxtemp.value + "℃</p><p>相對濕度</p><p>💧 " + data.weatherForecast[0].forecastMinrh.value + "-" + data.weatherForecast[0].forecastMaxrh.value + "%</p><br><p><b>天氣預報</b></p><p>" + data.weatherForecast[0].forecastWeather + "</p><p>風向及強度</p><p>" + data.weatherForecast[0].forecastWind + "</p>"; 
  subitem2holder.innerHTML = "<h3><b>" + data.weatherForecast[1].week + "</b></h3><p>🌡️ " + data.weatherForecast[1].forecastMaxtemp.value + "℃</p><p>相對濕度</p><p>💧 " + data.weatherForecast[1].forecastMinrh.value + "-" + data.weatherForecast[1].forecastMaxrh.value + "%</p><br><p><b>天氣預報</b></p><p>" + data.weatherForecast[1].forecastWeather + "</p><p>風向及強度</p><p>" + data.weatherForecast[1].forecastWind + "</p>"; 
  subitem3holder.innerHTML = "<h3><b>" + data.weatherForecast[2].week + "</b></h3><p>🌡️ " + data.weatherForecast[2].forecastMaxtemp.value + "℃</p><p>相對濕度</p><p>💧 " + data.weatherForecast[2].forecastMinrh.value + "-" + data.weatherForecast[2].forecastMaxrh.value + "%</p><br><p><b>天氣預報</b></p><p>" + data.weatherForecast[2].forecastWeather + "</p><p>風向及強度</p><p>" + data.weatherForecast[2].forecastWind + "</p>"; 
  weatherholder.innerHTML = data.generalSituation;
}

getapi(`https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=fnd&lang=tc`);
