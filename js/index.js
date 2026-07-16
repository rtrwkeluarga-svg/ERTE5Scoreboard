/*==================================================
ERTE5 SCOREBOARD PRO
INDEX.JS
==================================================*/

"use strict";

/*==================================================
ELEMENT
==================================================*/

const btnOperator =
document.getElementById("btnOperator");

const btnDisplay =
document.getElementById("btnDisplay");

const btnOperatorMobile =
document.getElementById("btnOperatorMobile");

const btnAbout =
document.getElementById("btnAbout");

/*==================================================
INIT
==================================================*/

window.addEventListener(

    "DOMContentLoaded",

    init

);

function init(){

    checkBrowser();

    bindEvent();

}

/*==================================================
EVENT
==================================================*/

function bindEvent(){

    btnOperator.addEventListener(

        "click",

        openOperator

    );

    btnDisplay.addEventListener(

        "click",

        openDisplay

    );

    btnOperatorMobile.addEventListener(

    "click",

    openOperatorMobile

    );

    btnAbout.addEventListener(

        "click",

        showAbout

    );

}

/*==================================================
OPEN PAGE
==================================================*/

function openOperator(){

    window.open(

        "operator.html",

        "_blank"

    );

}

function openDisplay(){

    window.open(

        "display.html",

        "_blank"

    );

}

function openOperatorMobile(){

    window.open(

        "operator-mobile.html",

        "_blank"

    );

}

/*==================================================
ABOUT
==================================================*/

function showAbout(){

    alert(

`ERTE5 DIGITAL SCOREBOARD

Version 1.0

Professional Tournament Edition

Developed using
HTML
CSS
JavaScript

Realtime Sync
BroadcastChannel API`

    );

}

/*==================================================
CHECK BROWSER
==================================================*/

function checkBrowser(){

    if(

        !("BroadcastChannel" in window)

    ){

        alert(

`Browser Anda tidak mendukung BroadcastChannel.

Gunakan:

Google Chrome
Microsoft Edge
Firefox`

        );

    }

}

/*==================================================
READY
==================================================*/

console.log(

"ERTE5 INDEX READY"

);