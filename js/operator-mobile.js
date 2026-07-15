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
START MATCH
==================================================*/

el.start.addEventListener("click", startMatch);

function startMatch(){

    el.setupScreen.style.display="none";

    el.controlScreen.style.display="flex";

    el.controlScreen.innerHTML=`

<div class="mobileControl">

    <div class="scoreHeader">

        <div class="playerBox">

            <div class="playerName" id="leftName">

                ${el.playerA.value||"LEFT PLAYER"}

            </div>

            <div class="score" id="leftScore">

                0

            </div>

        </div>

        <div class="timerBox">

            <div class="timer" id="mobileTimer">

                00:00

            </div>

            <div class="setInfo">

                SET 1

            </div>

        </div>

        <div class="playerBox">

            <div class="playerName" id="rightName">

                ${el.playerB.value||"RIGHT PLAYER"}

            </div>

            <div class="score" id="rightScore">

                0

            </div>

        </div>

    </div>

    <div class="scoreButtonRow">

        <button id="plusA" class="green">

            +1

        </button>

        <button id="minusA" class="red">

            -1

        </button>

        <button id="plusB" class="green">

            +1

        </button>

        <button id="minusB" class="red">

            -1

        </button>

    </div>

    <div class="controlButtonRow">

        <button id="startTimer">

            START

        </button>

        <button id="stopTimer">

            STOP

        </button>

        <button id="resetTimer">

            RESET

        </button>

    </div>

    <div class="controlButtonRow">

        <button id="nextSet">

            NEXT SET

        </button>

        <button id="undo">

            UNDO

        </button>

        <button id="resetMatch">

            RESET MATCH

        </button>

    </div>

</div>

`;

}
