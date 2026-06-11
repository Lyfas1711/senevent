"use strict" ;
(function() {
    window.addEventListener("load",main);

    function main (){
        /* this code is run after the page is load */
    }
    // other function you my define 

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