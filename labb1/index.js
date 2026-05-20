"use strict";

(function () {
    // 1. Les helpers d'abord (fonctions fléchées ultra-courtes en une seule ligne)
    const id = name => document.getElementById(name);
    const qs = selector => document.querySelector(selector);

    // 2. La fonction qui modifie les couleurs
    const change = () => {
        qs("p").style.color = "red";
        qs("h2").style.color = "blue";
    };

    // 3. La fonction d'initialisation qui utilise "id" et "change"
    const init = () => {
        id("b1").addEventListener("click", change);
    };

    // 4. L'écouteur global qui utilise "init" tout en bas
    window.addEventListener("load", init);
})();