let time=document.querySelector('.main-page .date h1')
let dateyear=document.querySelector('.main-page .date h3')

function timer(){
    let day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    let monthnames=[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
    var date=new Date()
   let hours=date.getHours()
   let minutes=date.getMinutes()
   let seconds=date.getSeconds()
   let days=date.getDay()
  let tarikh=date.getDate()
  let month=date.getMonth()
  let year=date.getFullYear()
  
   if(hours>12){
     time.innerHTML=`${day[days]}, ${String(hours-12).padStart('2','0')}:${String(minutes).padStart('2','0')}:${String(seconds).padStart('2','0')} PM`
   
   }
   else{
     time.innerHTML=`${day[days]}, ${String(hours).padStart('2','0')}:${String(minutes).padStart('2','0')}:${String(seconds).padStart('2','0')} AM`
   
   }

   dateyear.innerHTML=`${String(tarikh).padStart('2','0')} ${monthnames[month]}, ${year}`

}


setInterval(() => {
    timer()
}, 1000);