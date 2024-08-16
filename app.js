let stopWatch = document.querySelector("#stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let timer;

function startTimer(){
    timer = setInterval(function(){
        sec += 1;
        if(sec === 60){
          sec = 0;
          min += 1;
        }

        if(min === 60){
          min = 0;
          hr += 1;
        }

        let secStr = sec < 10 ? "0" + sec : sec;
        let minStr = min < 10 ? "0" + min : min;
        let hrStr = hr < 10 ? "0" + hr : hr;

        stopWatch.innerHTML = `${hrStr}:${minStr}:${secStr}`;
    },500)
}

function stopTimer(){
    clearInterval(timer);
}

function resetTimer(){
  clearInterval(timer);
    hr = 0; 
    min = 0; 
    sec = 0; 
    stopWatch.innerHTML = `00:00:00`;
}