"use strict" ;
(function() {
    window.addEventListener("load",init);

    function init (){
        /* this code is run after the page is load */
        id("sm").addEventListener("click", addNewTask) ;
       
    }
    // other function you my define 

    function addNewTask()
    {
        let task = id("task") ;
        let my_li= gen("li") ;
        my_li.innerHTML = task.value ;
        let my_ol = qs("ol") ;
        my_ol.appendChild(my_li) ;
        task.value = "" ;
       
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