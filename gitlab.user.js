// ==UserScript==
// @name         Gitlab augmentation
// @author       Adrian Juhl
// @namespace    https://github.com/adrianjuhl
// @version      0.1.6
// @description  Add links to assist navigation to 'Personal projects' in gitlab.
// @match        https://gitlab.adelaide.edu.au/*
// @grant        none
// @updateURL    https://github.com/adrianjuhl/augmented-browsing/raw/master/gitlab.meta.js
// @downloadURL  https://github.com/adrianjuhl/augmented-browsing/raw/master/gitlab.user.js
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

'use strict';

jQuery(function(){
  // Get username from the 'Profile' link of the profile dropdown menu.
  var username = jQuery("body > header > div.container-fluid > div.header-content > div.navbar-collapse > ul > li.header-user > div.dropdown-menu > ul > li > a.profile-link").attr("data-user");
  // Add a link to 'Personal projects' to the top header
  var using_new_navigation = jQuery("div.title-container ul.navbar-sub-nav").length;
  if (using_new_navigation) {
    jQuery("div.title-container ul.navbar-sub-nav").append("<li class=\"\"><a href=\"/users/" + username + "/projects\">Personal X15 projects</a></li>");
  } else {
    jQuery("div.title-container").append("<h1 class=\"title\"><a href=\"/users/" + username + "/projects\">Personal projects</a></h1>");
  }
  // Add a link to 'Personal projects' to the profile menu
  jQuery(".header-user > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1)").after("<li><a href=\"/users/" + username + "/projects\">Personal projects</a></li>");
});
