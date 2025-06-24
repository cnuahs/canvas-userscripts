# canvas-userscripts

A collection of user scripts to customise the [Canvas Learning Management System](https://www.instructure.com/canvas) from Instructure.

## Overview

A [user script](https://en.wikipedia.org/wiki/Userscript) is a small piece of JavaScript code that is injected by the browser into a page, after the user has been authenticated and the page has been loaded. The script runs entirely on the client side with the permissions of the user. This allows the user to customise the appearance or extend the behaviour of a page to suit their needs.

To install and run a user script you will need a user script manager for your browser. I recommend [Violentmonkey](https://violentmonkey.github.io/).

## Scripts

<details>
<summary>maximise-files-list.user.js</summary>
The default file list view is narrow, often making it impossible to see the full name of a file. This user script extends the width of the files list view to fill the width of the browser frame.
</details>

<details>
<summary>minimise-gradebook-warnings.user.js</summary>
Warnings displayed above the gradebook consume too much vertical screen real estate. This user script minimises warning banners to maximise space for the gradebook.
</details>

<details>
<summary>remove-navigation-checkbox.user.js</summary>
Canvas displays a "Show classic course navigation" checkbox at the top of the left side navigation menu. Weirdly, this checkbox seems to be rendered after the navigation menu. This causes the menu to be re-rendered, shifting it further down the page. This jittering is annoying when you're trying to navigate the course shell. This user script removes the checkbox and associated label so the left side navigation menu renders once and stays put.

_**Note**_: if you want to alter the state of the checkbox, you will need to temporarily disable this user script to display the checkbox again.
</details>

## License

[![Creative Commons License](https://i.creativecommons.org/l/by-sa/4.0/80x15.png)](http://creativecommons.org/licenses/by-sa/4.0/)<br />This work is licensed under a [Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).