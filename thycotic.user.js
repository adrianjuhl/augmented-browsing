// ==UserScript==
// @name         Thycotic augmentation
// @author       Adrian Juhl
// @namespace    https://github.com/adrianjuhl
// @version      0.1.2
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
  changeCss(passwordElementSelector, 'width: -webkit-fill-available;');
  changeCss(passwordShowHideElementSelector, 'float: right;');
}

function changeCss(className, classValue) {
  // An invisible container to store additional css definitions ...
  var cssMainContainer = $('#css-modifier-container');
  if(cssMainContainer.length == 0) {
    cssMainContainer = $('<div id="css-modifier-container"></div>');
    cssMainContainer.hide();
    cssMainContainer.appendTo($('body'));
  }
  // ... and one div for each class ...
  var classContainer = cssMainContainer.find('div[data-class="' + className + '"]');
  if(classContainer.length == 0) {
      classContainer = $('<div data-class="' + className + '"></div>');
      classContainer.appendTo(cssMainContainer);
  }
  // ... to append additional style.
  classContainer.html('<style>' + className + ' {' + classValue + '}</style>');
}

jQuery(function() {
  stylePasswordShowHideElement();
});
