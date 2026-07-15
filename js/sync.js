/*==================================================
 ERTE5 SCOREBOARD PRO
 FIREBASE REST SYNC
==================================================*/

"use strict";

const FIREBASE_URL =
"https://erte5-scoreboard-default-rtdb.asia-southeast1.firebasedatabase.app/scoreboard.json";

window.Sync={

    isSending:false,

    lastData:"",

    send(state){

        if(this.isSending) return;

        this.isSending=true;

        fetch(FIREBASE_URL,{

            method:"PUT",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify(state)

        })

        .finally(()=>{

            this.isSending=false;

        });

    },

    receive(callback){

        let lastJSON="";

        setInterval(()=>{

            fetch(FIREBASE_URL)

            .then(r=>r.json())

            .then(data=>{

                if(!data) return;

                const json=JSON.stringify(data);

                if(json===lastJSON) return;

                lastJSON=json;

                callback(data);

            })

            .catch(()=>{});

        },300);

    }

};

console.log("Firebase REST Ready");