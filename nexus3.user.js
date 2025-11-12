// ==UserScript==
// @name         Nexus3 augmentation
// @author       Adrian Juhl
// @namespace    https://github.com/adrianjuhl
// @version      0.1.3
// @description  Styles the password form to be wider.
// @match        https://maven-repository-integration.adelaide.edu.au/*
// @match        https://nexus3-integration-nexus.apps.ocp-blue.adelaide.edu.au/*
// @match        https://nexus3-integration-nexus-blue.apps.ocp-blue.adelaide.edu.au/*
// @match        https://nexus3-integration-nexus-green.apps.ocp-blue.adelaide.edu.au/*
// @grant        none
// @updateURL    https://github.com/adrianjuhl/augmented-browsing/raw/main/nexus3.meta.js
// @downloadURL  https://github.com/adrianjuhl/augmented-browsing/raw/main/nexus3.user.js
// @require      https://code.jquery.com/jquery-3.7.1.js
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.innerHTML = css;
    head.appendChild(style);
}

function styleLoginForm()
{
    // Login form overall sizing.
    addGlobalStyle('body > div[id^="nx-signin-"] { left: 25% !important; width: 50% !important; min-width: 400px; max-width: 1000px; }');
    // Login form username and password fields.
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="bodyWrap"] > div[id$="body"] { width: unset !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="bodyWrap"] > div[id$="body"] > div[id^="form-"] { width: unset !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="bodyWrap"] > div[id$="body"] > div[id^="form-"] > div[id$="bodyWrap"] > div[id$="body"] { width: unset !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="bodyWrap"] > div[id$="body"] > div[id^="form-"] > div[id$="bodyWrap"] > div[id$="body"] > div[id$="outerCt"] > div[id$="innerCt"] > div[id^="textfield-"] { width: 100% !important; }');
    // Login form header.
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="_header"] { width: 100% !important; left: 0px !important; top: 0px !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="_header"] > div[id$="_header-innerCt"] { width: 100% !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="_header"] > div[id$="_header-innerCt"] > div[id$="_header-targetEl"] { width: 100% !important; }');
    addGlobalStyle('body > div[id^="nx-signin-"] > div[id$="_header"] > div[id$="_header-innerCt"] > div[id$="_header-targetEl"] > div[id^="tool-"] { left: unset !important; right: 0px;  }');
    // Allow a narrower display.
    addGlobalStyle('body > div.nx-page { min-width: unset; overflow: auto; }');
}

jQuery(function() {
    'use strict';
    styleLoginForm();
});
