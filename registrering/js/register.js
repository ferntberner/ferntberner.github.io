var menu = true; 

const mainTime = document.getElementById('timer');
const subTime = document.getElementById('subtimer');

var oneSecondDown = false; 
var oneSecondUp = false;
var fiveSecondsDown = false;
var fiveSecondsUp = false;
var tenSecondsDown = false;
var tenSecondsUp = false;

var min = 0;
var sec = 0;
var stoptime = true;


function openSubMenu() {

        console.log("switching to sub menu");

        document.getElementById("subMenu").style.display="block";

        document.getElementById("subMenu").style.height="813px";

        document.getElementById("subMenu").style.width="375px";

        document.getElementById("reg-section").style.backgroundColor="#efefef";

        document.getElementById("subMenu").style.transitionDuration = "1s"

        document.getElementById("main-content").style.display="none";
        
}

function closeSubMenu(){

    console.log("switching to main menu");

    document.getElementById("subMenu").style.display="none";

    document.getElementById("main-content").style.display="initial";

    document.getElementById("reg-section").style.backgroundColor="#EFEFEF";

}

function plusleft( ){
    console.log("adding point to Team 1 score")
    var value = parseInt(document.getElementById("team-1-score").innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("team-1-score").innerHTML=value;

}

function plusright(){
    console.log("adding point to Team 2 score")
    var value = parseInt(document.getElementById("team-2-score").innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById("team-2-score").innerHTML=value;
}

function minusleft(){
    console.log("removing point from Team 1 score")
    var value = parseInt(document.getElementById("team-1-score").innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("team-1-score").innerHTML=value;
}

function minusright(){ 
    console.log("removing point from Team 1 score")
    var value = parseInt(document.getElementById("team-2-score").innerHTML, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById("team-2-score").innerHTML=value;
}

function adjustUpOne(){
    console.log("adding one second to clock");
    oneSecondUp = true;
}

function adjustDownOne(){
    console.log("subtracting one second from clock");
    oneSecondDown = true;
}

function adjustUpFive(){
    console.log("adding five seconds to clock");
    fiveSecondsUp = true;
}

function adjustDownFive(){
    console.log("subtracting five seconds from clock");
    fiveSecondsDown = true;
}

function adjustUpTen(){
    console.log("adding ten seconds to clock");
    tenSecondsUp = true;

}

function adjustDownTen(){
    console.log("subtracting ten seconds from clock");
    tenSecondsDown = true;
}


function startClock() {
    console.log("starting clock...")
    if (stoptime == true) {
          stoptime = false;
          initiateTimer();
    }    
}
function pauseClock() {
    console.log("clock is paused")
    if (stoptime == false) {
    stoptime = true;
    }
}
  
function initiateTimer() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
    
        sec = sec + 1;

        if (oneSecondDown == true) {
            sec = sec - 1;
            oneSecondDown = false;
        }

        if (oneSecondUp == true) {
            sec = sec + 1;
            oneSecondUp = false;
        }

        if (fiveSecondsDown == true) {
            sec = sec - 5;
            fiveSecondsDown = false;
        }

        if (fiveSecondsUp == true) {
            sec = sec + 5;
            fiveSecondsUp = false;
        }

        if (tenSecondsDown == true) {
            sec = sec - 10;
            tenSecondsDown = false;
        }

        if (tenSecondsUp == true) {
            min = min + 30;
            tenSecondsUp = false;
        }
    
        if (sec == 60 || sec > 60) {
          min = min + 1;
          sec = 0;
        }
    
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
    
        mainTime.innerHTML = min + ':' + sec;
        subTime.innerHTML = min + ':' + sec;
    
        setTimeout("initiateTimer()", 1000);
    }
}
  
function stopClock() {
    console.log("clock is stopped")
    mainTime.innerHTML = '00:00';
    subTime.innerHTML = '00:00';
    stoptime = true; 
    min = 0; 
    sec = 0;
}


