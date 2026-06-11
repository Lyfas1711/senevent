"use strict" ;
(function() {
    window.addEventListener("load",main);

    function main (){
        /* this code is run after the page is load */
        //id("sm").addEventListener("click", inc) ;
        setInterval(inc , 1000 )
    }
    // other function you my define 

    function inc()
    {
        let p = qs("p") ;
        let value = p.innerHTML ; 
        value++ ;
        //console.log(p)
        p.innerHTML = value ;

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