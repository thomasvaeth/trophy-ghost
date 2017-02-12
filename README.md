# 🏆 – A Blog Theme for Ghost
Trophy is a blog theme for Ghost built using HTML, Sass, and JavaScript (no jQuery). External stylesheets and libraries included are Google Fonts, Font Awesome, Normalize.CSS, Rellax, and WOW.js.

## Usage
* The Public API must be enabled because the ````get```` helper is being used in the theme. This setting is at the bottom of the ````Labs```` page (v0.11.4).
* The recommended size for post images is 2000px x 1200px.
* Authors should have a 2-3 sentence biography about them that will appear on posts they write. The recommended size for author images is 1000px x 600px.

## Installation
All dependencies for development are saved in the ````package.json```` files. Run ````npm install```` or ````yarn install```` to download the packages before editing any JavaScript or Sass.

## Edit Theme
I made everything as easy as possible to edit. The ````head.hbs```` file is in the ````partials```` folder and the Sass variables are found in the ````_base.scss```` file in the ````dist/scss```` folder. Run ````gulp```` if any changes are made to the JavaScript or Sass files.
