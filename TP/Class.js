// classList demo - CSE 154, week 3

"use strict";
(function() {

  window.addEventListener("load", init);

  function init() {
    id("add").addEventListener("click", addClass);
    id("add-another").addEventListener("click", addAnotherClass);
    id("remove").addEventListener("click", removeClass);
    id("contain").addEventListener("click", containClass);
    id("toggle").addEventListener("click", toggleClass);
  }

  function addClass() {
    id("text").classList.add("mystery");
  } 

  function addAnotherClass() {
    id("text").classList.add("surprise");
  }

  function removeClass() {
    id("text").classList.remove("mystery");
  }

  function containClass() {
    let result = id("text").classList.contains("mystery");
    if (result) {
      id("answer").textContent = "yEp!";
    } else {
      id("answer").textContent = "nOpE :(";
    }
  }

  function toggleClass() {
    id("text").classList.toggle("mystery");
  }

  function id(id) {
    return document.getElementById(id);
  }
})();