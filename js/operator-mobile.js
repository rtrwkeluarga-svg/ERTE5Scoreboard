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

function startMatch() {

    const state = {

        sport: el.sport.value,

        bestOf: Number(el.bestOf.value),

        serve: el.serve.value,

        playerA: el.playerA.value || "LEFT PLAYER",

        playerB: el.playerB.value || "RIGHT PLAYER",

        organizer: el.organizer.value,

        eventName: el.eventName.value,

        eventSubtitle: el.eventSubtitle.value,

        logo: logoData,

        mirror: el.mirror.checked,

        flipDisplay: el.flip.checked

    };

    console.log(state);

}
