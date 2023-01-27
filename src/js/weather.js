const api_key = "29b79234da2bc7ebdf49047690b73c76";
const weather_img = document.querySelector(
  ".header-content__weather-content img"
);

const weather_temp = document.querySelector(
  ".header-content__weather-content span"
);

const weather_location = document.querySelector(
  ".header-content__weather-location span"
);

var loc = document.getElementById("myLocation");

function coordinateCheck(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log(position);

  console.log(lat, lon);

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const temp = data.main.temp;
      const icon = data.weather[0].icon;
      const name = data.name;

      const icon_url = `http://openweathermap.org/img/wn/${icon}@2x.png`;

      weather_img.src = icon_url;
      weather_temp.innerHTML = `${temp}&#8451`;
      weather_location.innerHTML = `${name}`;
    });
}

function onError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      loc.innerHTML =
        "이 문장은 사용자가 Geolocation API의 사용 요청을 거부했을 때 나타납니다!";
      break;
    case error.POSITION_UNAVAILABLE:
      loc.innerHTML =
        "이 문장은 가져온 위치 정보를 사용할 수 없을 때 나타납니다!";
      break;
    case error.TIMEOUT:
      loc.innerHTML =
        "이 문장은 위치 정보를 가져오기 위한 요청이 허용 시간을 초과했을 때 나타납니다!";
      break;
    case error.UNKNOWN_ERROR:
      loc.innerHTML = "이 문장은 알 수 없는 오류가 발생했을 때 나타납니다!";
      break;
  }
}

navigator.geolocation.getCurrentPosition(coordinateCheck, onError);
