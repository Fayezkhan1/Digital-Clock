const time=document.querySelector('#time');
function displayTime(){
let date=new Date();
let hours=date.getHours();
let minutes=date.getMinutes();
let seconds=date.getSeconds();
let d_n="AM"
if(hours>12){
    hours=hours-12;
    d_n="PM"
}
if(hours<10){
    hours="0"+hours;
}
if(minutes<10){
    minutes="0"+minutes;
}
if(seconds<10){
    seconds="0"+seconds;
}

time.textContent=hours+ ":"+minutes+":" + seconds+":"+d_n;

}
function startClock(){
    displayTime();
    setInterval(displayTime,1000);
}

// call function
startClock();
