// ==UserScript==
// @name        maximise-files-list
// @namespace   https://github.com/cnuahs/canvas-userscripts
// @description Maximise width of the files list view.
// @author      Shaun L. Cloherty <s.cloherty@ieee.org>
// @match       https://*.instructure.com/*files*
// @version     1.0
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle('body.files #content-wrapper { max-width: 100% }')
GM_addStyle('.ef-select-col, .ef-links-col { flex: 0 0 auto }')
