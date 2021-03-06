// ==UserScript==
// @name         Twitter Web Client Holo Theme (Dynamic Color)
// @namespace    https://nnn1590.org/
// @version      0.1
// @description  Make the Twitter Web Client (Dark) look like Android Holo | Twitter Web Client(ダーク)の見た目をAndroid Holoっぽくする
// @author       NNN1590
// @license      GPLv3 or later
// @match        https://twitter.com/*
// @grant        none
// @noframes
// ==/UserScript==

(function() {
    'use strict';
    var isFirstRun = true;
    window.addEventListener('locationchange', function(){
        setTimeout(updateCSS, 200);
    });
    // Original from: https://stackoverflow.com/a/52809105
    /* These are the modifications: */
    history.pushState = ( f => function pushState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('pushState'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.pushState);

    history.replaceState = ( f => function replaceState(){
        var ret = f.apply(this, arguments);
        window.dispatchEvent(new Event('replaceState'));
        window.dispatchEvent(new Event('locationchange'));
        return ret;
    })(history.replaceState);

    window.addEventListener('popstate',()=>{
        window.dispatchEvent(new Event('locationchange'))
    });
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

    function updateCSS() {
        var themeColor = getComputedStyle(document.querySelector("body > a")).color;
        var cssElement = null;
        if (isFirstRun) {
            cssElement = document.createElement("style");
        } else {
            cssElement = document.getElementById("twitter-web-client-holo-theme")
        }
        // console.log("Color is: " + themeColor);
        var css = `
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
    border-bottom: inset 2px ` + themeColor + `;
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
    background-color: ` + themeColor + `;
}

#search-query:hover {
    border-bottom: 1px solid ` + themeColor + `;
}
`;
        cssElement.innerText = css;
        cssElement.type = 'text/css';
        cssElement.id = 'twitter-web-client-holo-theme';
        if (isFirstRun) document.getElementsByTagName('HEAD').item(0).appendChild(cssElement);
        isFirstRun = false;
    }
})();
