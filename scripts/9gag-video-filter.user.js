// ==UserScript==
// @name        9gag video filter
// @version     0.0.2
// @namespace   de.n00b42
// @description 9gag videos filter
//
// @downloadURL https://raw.githubusercontent.com/n00b42/userscript/main/scripts/9gag-video-filter.user.js
//
// @include     https://9gag.com/*
// @grant       GM_log
//
// @require     https://raw.githubusercontent.com/n00b42/userscript-utilities/main/detectElements.js
//
// ==/UserScript==

// ***********************************************************************************

detectElements("article .post-container video", (e) => {
	e.closest('article').remove();
})

detectElements("article .post-container .youtube-post", (e) => {
	e.closest('article').remove();
})

console.log('9gag vide filter loaded.');
