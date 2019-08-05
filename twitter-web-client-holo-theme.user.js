// ==UserScript==
// @name         Twitter Web Client Holo Theme
// @namespace    https://nnn1590.org/
// @version      0.1
// @description  Make the Twitter Web Client (Dark) look like Android Holo | Twitter Web Client(ダーク)の見た目をAndroid Holoっぽくする
// @author       NNN1590
// @license      GPLv3
// @match        https://twitter.com/*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    /*document.querySelector("#global-nav-home > a > span.text").innerText = "Home";
    document.querySelector("#global-actions > li.moments.js-moments-tab > a > span.text").innerText = "Moments";
    document.querySelector("#global-actions > li.people.notifications > a > span.text").innerText = "Notifications";
    document.querySelector("#global-actions > li.dm-nav > a > span.text").innerText = "Messages";*/
    var holoTabLine = document.createElement("li");
    holoTabLine.class = "holotab-line"
    document.querySelector("#global-actions > li.moments").insertAdjacentHTML('beforebegin', "<li class=\"holotab-line\"></li>");
    document.querySelector("#global-actions > li.people.notifications").insertAdjacentHTML('beforebegin', "<li class=\"holotab-line\"></li>");
    document.querySelector("#global-actions > li.dm-nav").insertAdjacentHTML('beforebegin', "<li class=\"holotab-line\"></li>");
    document.querySelector("#search-query").insertAdjacentHTML('afterend', '<div class="left"></div><div class="right"></div>');
    var css = document.createElement("style");
    css.innerText = `
@import url("https://fonts.googleapis.com/css?family=Kosugi+Maru&display=swap");

#global-actions > li > a > span.text {
    color: #ffffff;
    text-transform: uppercase;
    font-family: Roboto, "Kosugi Maru", "Noto Sans", "Noto Sans JP", "Noto Sans CJK JP", sans-serif;
}

#global-actions > li.holotab-line {
    border-left: 1px solid #333;
    height: 23px;
    margin-top: 11.5px;
}

#global-nav-home {
    border-left: none!important;
}

#global-actions > li > a:hover,  #global-actions > li > a:focus {
    background: #666;
}

#global-actions > li > a:active {
    background: #999;
}

.global-nav-inner {
    background: #000000;
    border-bottom: inset 2px #33b5e5;
}

body {
    background: linear-gradient(#000000, #272d33);
    background-attachment: fixed;
}

#search-query {
    border-radius: 0px;
    border: 0px none;
    border-bottom: 1px solid #333;
    background-color: transparent;
}

.left {
    left: -1px;
}

.right {
    left: 221px;
}

.left, .right {
    top: 27px;
    display: block;
    position: absolute;
    height: 5px;
    width: 1px;
    transition: all .2s ease-in-out;
    background-color: #333;
}

#global-nav-search:focus > .left, #global-nav-search:focus > .right, #global-nav-search:hover > .left, #global-nav-search:hover > .right {
    background-color: #33b5e5;
}

#search-query:hover {
    border-bottom: 1px solid #33b5e5;
}
`;
    css.type = 'text/css';
    document.getElementsByTagName('HEAD').item(0).appendChild(css);
})();
