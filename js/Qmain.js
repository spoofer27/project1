/*jslint browser: true*/
/*global $, document */
/**/
$(document).ready(function () {
    "use strict";
    
    $(".sectiontoggle").click(function () {

        $(this).next(1).slideToggle(1000);
    });
    $(".show").click(function () {
        $(".screen").show(2000);
    });
    $(".hide").click(function () {
        $(".screen").hide(2000);
    });
    $(".toggle").click(function () {
        $(".screen").toggle(2000);
    });
    $(".fadeIn").click(function () {
        $(".screen").fadeIn(2000);
    });
    $(".fadeOut").click(function () {
        $(".screen").fadeOut(2000);
    });
    $(".fadeToggle").click(function () {
        $(".screen").fadeToggle(2000);
    });
    $(".slideDown").click(function () {
        $(".screen").slideDown(2000);
    });
    $(".slideUp").click(function () {
        $(".screen").slideUp(2000);
    });
    $(".slideToggle").click(function () {
        $(".screen").slideToggle(2000);
    });
    
    
    
    
    
    
    $(".headings").next(1).addClass("result");
});
        
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

    
    
    
    


