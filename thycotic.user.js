// ==UserScript==
// @name         Thycotic augmentation
// @author       Adrian Juhl
// @namespace    https://github.com/adrianjuhl
// @version      0.1.1
// @description  Right aligns the Show/Hide password link.
// @match        https://thycotic.ad.adelaide.edu.au/*
// @grant        none
// @updateURL    https://github.com/adrianjuhl/augmented-browsing/raw/master/thycotic.meta.js
// @downloadURL  https://github.com/adrianjuhl/augmented-browsing/raw/master/thycotic.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

'use strict';

var passwordElementSelector = "#nav > div.right > div > div > ss-root > ss-secret-home > ss-page-dialog > div > div.dialog-container > div > div > ss-page-detail > div > div.detail-page-content.detail-page-content-tabs > ss-secret-general > div > div.ng-untouched.ng-pristine.ng-valid > ss-form-dialog > div > div:nth-child(1) > ss-secret-field-edit > div > div:nth-child(3) > div.thirteen.wide.field.ng-star-inserted > ss-form-input";
var passwordShowHideElementSelector = passwordElementSelector + " > div.ng-star-inserted > div > a";

var stylePasswordShowHideElement = function() {
  jQuery(passwordElementSelector).css('width', '-webkit-fill-available');
  jQuery(passwordShowHideElementSelector).css('float', 'right');
}

waitForElementToExist(passwordShowHideElementSelector, stylePasswordShowHideElement, 100);

/**
 * Wait for the specified element to appear in the DOM. When the element appears, provide it to the callback.
 *
 * @param elementSelector the selector for the element (eg, 'div.container img')
 * @param callback function that takes selected element (null if timeout)
 * @param maxTries number of times to try (return null after maxTries, false to disable, if 0 will still try once)
 * @param interval milliseconds to wait between each try
 */
function waitForElementToExist(elementSelector, callback, maxTries = false, interval = 100) {
  const elementPoller = setInterval(() => {
    const element = jQuery(elementSelector);
    const retry = maxTries === false || maxTries-- > 0
    if (retry && element.length < 1) {
      return; // try again
    }
    clearInterval(elementPoller)
    callback(element || null)
  }, interval)
}
