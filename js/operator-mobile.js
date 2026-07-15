/*==================================================
ERTE5 SCOREBOARD MOBILE
operator-mobile.js
==================================================*/

"use strict";

/*==================================================
ELEMENT
==================================================*/

const el = {

    setupScreen: document.getElementById("setupScreen"),

    controlScreen: document.getElementById("controlScreen"),

    sport: document.getElementById("sport"),

    bestOf: document.getElementById("bestOf"),

    serve: document.getElementById("serve"),

    playerA: document.getElementById("playerA"),

    playerB: document.getElementById("playerB"),

    organizer: document.getElementById("organizer"),

    eventName: document.getElementById("eventName"),

    eventSubtitle: document.getElementById("eventSubtitle"),

    logo: document.getElementById("logo"),

    mirror: document.getElementById("mirrorDisplay"),

    flip: document.getElementById("flipDisplay"),

    start: document.getElementById("btnStartMatch")

};

/*==================================================
LOGO
==================================================*/

let logoData = "";

el.logo.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {

        logoData = e.target.result;

    };

    reader.readAsDataURL(file);

});

/*==================================================
CONTROL ELEMENT
==================================================*/

const control={};

function bindControl(){

    control.leftName=document.getElementById("leftName");
    control.rightName=document.getElementById("rightName");

    control.leftScore=document.getElementById("leftScore");
    control.rightScore=document.getElementById("rightScore");

    control.timer=document.getElementById("timer");

    control.set=document.getElementById("setText");

    control.status=document.getElementById("statusText");

    control.serveA=document.getElementById("serveA");
    control.serveB=document.getElementById("serveB");

}

/*==================================================
START MATCH
==================================================*/

el.start.addEventListener("click", startMatch);

function startMatch(){

    el.setupScreen.style.display="none";

    el.controlScreen.style.display="flex";

    bindControl();

    bindButton();

    Scoreboard.startMatch({

    sport:el.sport.value,

    bestOf:Number(el.bestOf.value),

    serve:el.serve.value,

    playerA:el.playerA.value,

    playerB:el.playerB.value,

    organizer:el.organizer.value,

    eventName:el.eventName.value,

    eventSubtitle:el.eventSubtitle.value,

    logo:logoData,

    mirror:el.mirror.checked,

    flipDisplay:el.flip.checked

});


function formatTime(total){

    const m=Math.floor(total/60);

    const s=total%60;

    return String(m).padStart(2,"0")+":"+String(s).padStart(2,"0");

}

/*==================================================
RENDER
==================================================*/

Scoreboard.subscribe(render);

function render(state){

    let leftName,rightName;
    let leftScore,rightScore;
    let leftSet,rightSet;

    if(state.swapSide){

        leftName=state.playerB;
        rightName=state.playerA;

        leftScore=state.scoreB;
        rightScore=state.scoreA;

        leftSet=state.setB;
        rightSet=state.setA;

    }else{

        leftName=state.playerA;
        rightName=state.playerB;

        leftScore=state.scoreA;
        rightScore=state.scoreB;

        leftSet=state.setA;
        rightSet=state.setB;

    }

    if(control.leftName){

        control.leftName.textContent=leftName;

        control.rightName.textContent=rightName;

        control.leftScore.textContent=leftScore;

        control.rightScore.textContent=rightScore;

        control.timer.textContent=formatTime(state.timer);

        control.set.textContent="SET "+state.currentSet;

        control.status.textContent=state.status;

        control.serveA.textContent=
        state.serve==="A"?"🟢 SERVE":"";

        control.serveB.textContent=
        state.serve==="B"?"🟢 SERVE":"";

    }

}

/*==================================================
BUTTON EVENT
==================================================*/

function bindButton(){

    document.getElementById("plusA").onclick=()=>{

        Scoreboard.addPoint("A");

    };

    document.getElementById("minusA").onclick=()=>{

        Scoreboard.removePoint("A");

    };

    document.getElementById("plusB").onclick=()=>{

        Scoreboard.addPoint("B");

    };

    document.getElementById("minusB").onclick=()=>{

        Scoreboard.removePoint("B");

    };

    document.getElementById("startTimer").onclick=()=>{

        Scoreboard.startTimer();

    };

    document.getElementById("stopTimer").onclick=()=>{

        Scoreboard.stopTimer();

    };

    document.getElementById("resetTimer").onclick=()=>{

        Scoreboard.resetTimer();

    };

    document.getElementById("nextSet").onclick=()=>{

        Scoreboard.nextSet();

    };

    document.getElementById("undo").onclick=()=>{

        Scoreboard.undo();

    };

    document.getElementById("resetMatch").onclick=()=>{

        if(confirm("Reset pertandingan?")){

            Scoreboard.resetMatch();

        }

    };

}
