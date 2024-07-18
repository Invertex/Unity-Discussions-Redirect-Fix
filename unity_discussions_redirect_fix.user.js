// ==UserScript==
// @name         Unity Discussions Redirect Fix
// @namespace    Invertex
// @version      2024-07-18
// @description  Fixes the redirect from old Discussions forum links to the new Discussions forum
// @author       Invertex
// @updateURL    https://github.com/Invertex/Unity-Discussions-Redirect-Fix/raw/main/unity_discussions_redirect_fix.user.js
// @downloadURL  https://github.com/Invertex/Unity-Discussions-Redirect-Fix/raw/main/unity_discussions_redirect_fix.user.js
// @match        https://discussions.unity.com/threads/*.*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=unity.com
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';

    let url = window.location.href;
    let urlSplit = url.split('.com/threads/');
    if(urlSplit.length > 1)
    {
        window.location.href = urlSplit[0] + '.com/t/' + urlSplit[1].split('/')[0];
    }
})();
