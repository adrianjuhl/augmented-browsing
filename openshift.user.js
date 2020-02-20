// ==UserScript==
// @name         Openshift Web Console augmentation
// @author       Adrian Juhl
// @namespace    https://github.com/adrianjuhl
// @version      0.1.10
// @description  Adds a text field to the Pipelines page that filters the pipelines to those whose name contains the given text.
// @match        https://rhos-console.services.adelaide.edu.au:8443/*
// @match        https://rhosd-console.services.adelaide.edu.au:8443/*
// @grant        none
// @updateURL    https://github.com/adrianjuhl/augmented-browsing/raw/master/openshift.meta.js
// @downloadURL  https://github.com/adrianjuhl/augmented-browsing/raw/master/openshift.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

'use strict';

stylePipelineElements();

jQuery(async function(){
  var windowsLocationPathname = window.location.pathname;
  if(windowsLocationPathname.indexOf('pipelines') > -1) {
    await sleep(1000);
    addPipelinesNameFilterElements();
  }
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var _monkeyPatchHistoryFunction = function(type) {
  var originalFunction = history[type];
  return function() {
    var returnValue = originalFunction.apply(this, arguments);
    var event = new Event(type);
    event.arguments = arguments;
    window.dispatchEvent(event);
    return returnValue;
  };
};

history.pushState = _monkeyPatchHistoryFunction('pushState');

window.addEventListener('pushState', async function(e) {
  var windowsLocationPathname = window.location.pathname;
  if(windowsLocationPathname.indexOf('pipelines') > -1) {
    await sleep(100);
    addPipelinesNameFilterElements();
  }
});

function addPipelinesNameFilterElements() {
  var windowsLocationPathname = window.location.pathname; // get the current URL;
  if(windowsLocationPathname.indexOf('pipelines') > -1) {
    jQuery("<div class='data-toolbar'></div>")
    .insertAfter("body > div > div > div > div.middle-header > div > div")
    .append("<span style='margin: 4px 8px 0 0;'>Filter&nbsp;name&nbsp;by:</span>")
    .append("<input id='nameFilterSearchInput' type='search' class='form-control'>")
    .append(
      jQuery("<input type='button' value='Apply Filter'>").on('click', function(){
        var nameFilterSearchText = document.getElementById('nameFilterSearchInput').value;
        jQuery("body > div > div > div > div.middle-content.pipelines-page > div > div > div > div").has("div > h2 > a:not(:contains('" + nameFilterSearchText + "'))").hide();
        jQuery("body > div > div > div > div.middle-content.pipelines-page > div > div > div > div").has("div > h2 > a:contains('" + nameFilterSearchText + "')").show();
      })
    );
  }
}

function stylePipelineElements() {
  changeCss('.pipeline .pipeline-stage', 'width: 150px; padding: 5px;');
  changeCss('.pipeline .pipeline-stage:before', 'right: -3px; top: 31px; content: \'\\203a\';');
  changeCss('.pipeline .pipeline-stage-name', 'white-space: normal; text-align: left; height: 38px; margin-bottom: 0px; background-color: #f0f8ff;');
  changeCss('.pipeline-time', 'margin-top: 0px; background-color: #f0f8ff;');
  changeCss('.pipeline-status-bar', 'align-items: flex-end;');
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
