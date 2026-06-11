"use strict";
(function () {
  window.addEventListener("load", init);

  function init() {
    let bugs = qsa("#bug-container img");
    for (let i = 0; i < bugs.length; i++) {
      bugs[i].addEventListener("click", whackBug);
    }
  }

  function whackBug() {
  if (!this.classList.contains("whacked")) {
    this.classList.add("whacked");

    // Met à jour le score
    let scoreElem = id("score");
    let currentScore = parseInt(scoreElem.textContent);
    currentScore++;
    scoreElem.textContent = currentScore;

    // Vérifie si tous les bugs sont whackés
    if (currentScore === 12) {
      // Remplace tout le paragraphe contenant le score
      let scoreText = qs("#game p");
      scoreText.textContent = "🎉 all bugs have been whacked 🎉";
    }
  }
}


  function id(name) {
    return document.getElementById(name);
  }

  function qs(selector) {
    return document.querySelector(selector);
  }

  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();