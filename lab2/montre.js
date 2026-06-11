"use strict";
(function() {
    window.addEventListener("load", main);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    function main() {
        inc();
        setInterval(inc, 1000);
    }

    function inc() {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
                if (hours === 24) {
                    hours = 0;
                }
            }
        }

        const h = String(hours).padStart(2, "0");
        const m = String(minutes).padStart(2, "0");
        const s = String(seconds) ;

        const currentTime = `${h}:${m}:${s}`;
        document.getElementById("clock").textContent = currentTime;
    }
    function id(id){
        return document.getElementById(id);
    }

    function qs(selector)
    {
        return document.querySelector(selector);
    }

    function qsa(selector)
    {
        return document.querySelectorAll(selector);
    }
    function gen(tagname)
    {
        return document.createElement(tagname)
    }
})() ;

