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
 


var motivation_object=[
  {
  quotes:'The only way to do great work is to love what you do.',
  authors:'Steve Jobs'
},
 {
  quotes:'Success is not final, failure is not fatal: It is the courage to continue that counts.',
  authors:'Winston Churchill'
} ,
{
  quotes:"Believe you can and you're halfway there.",
  authors:'Theodore Roosevelt'
} ,
{
  quotes:"Don't watch the clock; do what it does. Keep going.",
  authors:'Sam Levenson'
},
{
  quotes:"The future belongs to those who believe in the beauty of their dreams.",
  authors:'Eleanor Roosevelt'
},
{
  quotes:"Start where you are. Use what you have. Do what you can.",
  authors:'Arthur Ashe'
},
{
  quotes:"Hardships often prepare ordinary people for an extraordinary destiny.",
  authors:'C.S. Lewis'
},
{
  quotes:"It does not matter how slowly you go as long as you do not stop.",
  authors:'Confucius'
},
{
  quotes:"Your time is limited, so don't waste it living someone else's life.",
  authors:'Steve Jobs'
},
{
  quotes:"Success usually comes to those who are too busy to be looking for it.",
  authors:'Henry David Thoreau'
},
]
var quote=document.querySelector('.quote')
var author=document.querySelector('.author')
var moti=document.querySelector('.moti')

moti.addEventListener('click',function(){
  let number=Math.floor(Math.random()*10)
  console.log(number);
  
quote.innerHTML=`${motivation_object[number].quotes}`
author.innerHTML=` by- ${motivation_object[number].authors}`
})


