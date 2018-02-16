// ==UserScript==
// @name         Bitcointalk Sorting
// @version      1
// @description    Sort bitcointalk 
// @author       mazdafunsun
// @match        https://bitcointalk.org/index.php?board=*
// ==/UserScript==
// Initial Version

document.getElementsByClassName('mirrortab_back')[0].innerHTML += " | <a href='"+ window.location.href + ";sort=first_post;desc'>Sort recent</a>";
