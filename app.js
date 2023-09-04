// DWD API
// https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/forecast_mosmix_10184.json

function test() {
  alert("test");
}

let url =
  "https://s3.eu-central-1.amazonaws.com/app-prod-static.warnwetter.de/v16/forecast_mosmix_10184.json";

async function getData() {
  let res = await fetch(url);
  let data = await res.json();
  let windDegree = data.forecast.windDirection[2];
  console.log(windDegree.toString().slice(0, 3));

  renderTableBody(data);
}

function renderTableBody(data) {
  document.getElementById("wind-degree").innerHTML =
    data.forecast.windDirection[2].toString().slice(0, 3);
}

function getPokemonTest() {
  console.log(spotDescriptions.spots[0].name);
}
