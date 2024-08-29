// ==UserScript==
// @name        minimize-gradebook-warnings
// @namespace   https://github.com/cnuahs/canvas-userscripts
// @description Minimise warning banners above the gradebook.
// @author      Shaun L. Cloherty <s.cloherty@ieee.org>
// @match       https://*.instructure.com/courses/*/gradebook
// @version     1.0
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle('.ic-flash-warning { max-width: 100%; padding: 6px 8px 6px 48px; font-size: 0.75rem; line-height: 1.0 }')
