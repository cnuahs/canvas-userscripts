// ==UserScript==
// @name        remove-navigation-checkbox
// @namespace   https://github.com/cnuahs/canvas-userscripts
// @description Remove classic navigation checkbox in the left side navigation menu.
// @author      Shaun L. Cloherty <s.cloherty@ieee.org>
// @match       https://*.instructure.com/courses/*
// @version     1.0
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle('div.checkbox-container { display:none !important; }')
