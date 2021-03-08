// ==UserScript==
// @name         Autolike youtube
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       Oscar Capraro
// @match        https://www.youtube.com/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==


(function() {
    'use strict';
    function likeVideo() {
        setTimeout(function(){
            let likeButton = $("#top-level-buttons ytd-toggle-button-renderer:first");
            const liked = $(likeButton).hasClass("style-default-active");
            // console.log(liked);
            if(!liked){
                $(likeButton).click();
            }
        },3000);
    }
    window.addEventListener('yt-page-data-updated', likeVideo);
})();
