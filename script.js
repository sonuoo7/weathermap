const lati = localStorage.getItem("lat");
const longi = localStorage.getItem("long");
document.getElementById("lat").textContent = lati;
document.getElementById("lon").textContent = longi;

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=" +
  lati +
  "&lon=" +
  longi +
  "&appid=a05e4d21c63465c3bc75f5b6c429b24a";
console.log(url);
async function getData(url) {
  const responce = await fetch(url);
  data = await responce.json(); //convert in json
  console.log(data);
  document.getElementsByClassName(
    "txt"
  )[0].innerText = ` Location:${data.name}`;
  document.getElementsByClassName(
    "txt"
  )[1].innerHTML = `<pre> Lat:${data.coord.lat}         Long:${data.coord.lon}`;
  document.getElementsByClassName(
    "txt"
  )[2].innerText = `TimeZone:${data.timezone}`;
  document.getElementsByClassName(
    "txt"
  )[3].innerText = `WindSpeed:${data.wind.speed}`;
  document.getElementsByClassName(
    "txt"
  )[4].innerText = `Pressure:${data.main.pressure}`;
  document.getElementsByClassName(
    "txt"
  )[5].innerText = `Humidity:${data.main.humidity}`;
  document.getElementsByClassName(
    "txt"
  )[6].innerText = `Wind Direction:${data.wind.gust}`;
  document.getElementsByClassName(
    "txt"
  )[7].innerText = `UV Index:${data.weather[0].description}`;
  document.getElementsByClassName(
    "txt"
  )[8].innerText = `Feels Like:${data.main.feels_like}`;
}
getData(url);
