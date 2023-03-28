const city = document.getElementById("city-name");
const temp = document.getElementById("main-temp");
const wind = document.getElementById("wind");
const humidity = document.getElementById("humidity");
const feel = document.getElementById("feel-like");
const input = document.getElementById("text");
const apiKey = "3265874a2c77ae4a04bb96236a642d2f";
window.onload = () => {
  let date = new Date();
  document.getElementById(
    "date"
  ).innerText = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
};
function enter(event) {
  if (event.code == "Enter") {
    getdata();
  } else {
    return false;
  }
}
function getdata() {
  if (input.value != "") {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        city.innerText = data.name;
        temp.innerText = `${parseInt(data.main.temp)}°`;
        wind.innerText = `${data.wind.speed}km/h`;
        humidity.innerText = `${data.main.humidity}%`;
        feel.innerText = `${parseInt(data.main.feels_like)}°`;
      })
      .catch(() => {
        alert("please enter a vaild city name");
      });
  } else {
    return false;
  }
  input.value = "";
}
