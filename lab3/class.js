"use strict" ;
(function() {
    window.addEventListener("load",init);

    function init (){
       id("add").addEventListener("click" , addClass);
       id("add-another").addEventListener("click" , addAnotherClass);
       id("remove").addEventListener("click" , addRemoveClass);
       id("contain").addEventListener("click" , addContain);
       id("toggle").addEventListener("click" , addToggleClasse)
       
    }
    // other function you my define 

    function addClass()
    {
       id("text").classList.add("mystery");
       
    }
    function addAnotherClass()
    {
        id("text").classList.add("surprise");

    }
    function addRemoveClass()
    {
        id("text").classList.remove("surprise");

    }
    function addContain()
    {
        let result = id("text").classList.contains("mystery");
        if (resut)
        {
            id("answer").textContent = "Yes" ;

        }else
        {
            id("answer").textContent= "No";
        }
    }
    function addToggleClasse()
    {
        id("text").classList.toggle("mystery");
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
    function gen(tagname)//permet de creer un element vide
    {
        return document.createElement(tagname)
    }
})() ;