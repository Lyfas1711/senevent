"use strict" ;
(function() {
    window.addEventListener("load",init);

    function init (){
        /* this code is run after the page is load */
        id("nar").addEventListener("click", hideDafy) ;
       
    }
    // other function you my define 

    function hideDafy()
    {
       id("nar").classList.add("mystery");
       id("nar").classList.add("older") ;
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