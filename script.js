function timing() {
  let time = document.querySelector(".main-page .date h1");
  let dateyear = document.querySelector(".main-page .date h3");

  function timer() {
    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let monthnames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let days = date.getDay();
    let tarikh = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();

    if (hours > 12) {
      time.innerHTML = `${day[days]}, ${String(hours - 12).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart(
        "2",
        "0"
      )} PM`;
    } else {
      time.innerHTML = `${day[days]}, ${String(hours).padStart(
        "2",
        "0"
      )}:${String(minutes).padStart("2", "0")}:${String(seconds).padStart(
        "2",
        "0"
      )} AM`;
    }

    dateyear.innerHTML = `${String(tarikh).padStart("2", "0")} ${
      monthnames[month]
    }, ${year}`;
  }

  setInterval(() => {
    timer();
  }, 1000);
}

timing();

function weatherApiCall() {
  let degree = document.querySelector(".main-page .weather h2");
  let lig = document.querySelector(".main-page .weather h3");
  let pre = document.querySelector(".main-page .weather .pre");
  let hum = document.querySelector(".main-page .weather .hum");
  let wind = document.querySelector(".main-page .weather .wind");

  const apiKey = `20884f0c447949c9879125508252106`;
  var city = "Jaipur";

  var data = null;
  async function weather() {
    var response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`
    );
    data = await response.json();
    console.log(data);
    degree.innerHTML = `${data.current.temp_c} °C`;
    lig.innerHTML = `${data.current.condition.text}`;
    hum.innerHTML = `Humidity: ${data.current.humidity}%`;
    wind.innerHTML = `Wind: ${data.current.wind_kph} Km/h`;
    pre.innerHTML = `Heat index: ${data.current.heatindex_c}°C`;
  }
  weather();
}

weatherApiCall();

function openCloseFeature(){
  let allElems = document.querySelectorAll(".allelems .elems");
let Elems = document.querySelectorAll(".elem-pages");
let close = document.querySelectorAll(".close");

allElems.forEach((elem, idx) => {
  elem.addEventListener("click", function () {
    
    Elems[idx].style.display = "block";
  });
});



close.forEach(function (back,idx) {
        back.addEventListener('click', function () {
            Elems[idx].style.display = 'none'
        })
    })

}

openCloseFeature()