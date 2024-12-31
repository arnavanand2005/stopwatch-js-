const time=document.getElementById("time");
let starttime=0;
let timer=null;
let elapsed=0;
let is_running=false;


function start(){
    if(!is_running){
        starttime=Date.now() - elapsed;
        timer=setInterval(update,10);
        is_running=true
    }
}

function stop(){
    if(is_running){
        clearInterval(timer);
        is_running=false;
    }
}

function reset(){
    clearInterval(timer);
    elapsed=0;
    is_running=false;
    time.textContent="00:00:00:00";
}

function update(){
    elapsed=Date.now()-starttime;
    let hours=Math.floor(elapsed/(1000 * 60 * 60));
    let minutes=Math.floor((elapsed/(1000 * 60)) %60);
    let seconds=Math.floor((elapsed/1000 % 60));
    let mili=Math.floor((elapsed%1000)/100);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    mili=String(mili).padStart(2,"0");

    time.textContent=`${hours}:${minutes}:${seconds}:${mili}`
}
