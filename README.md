# 🏆 – A Blog Theme for Ghost
Trophy is a blog theme for Ghost built using HTML, Sass, and JavaScript (no jQuery). External stylesheets and libraries included are Google Fonts, Font Awesome, Normalize.CSS, Rellax, and WOW.js.
Trophy is also available in [Jekyll](https://github.com/thomasvaeth/trophy-jekyll).


## Screenshots
Post Page (Mast)
![Blog Page](https://github.com/thomasvaeth/trophy-ghost/blob/master/screenshots/screenshot-1.jpg "Desktop screenshot")

Post Page (Content)
![Blog Page](https://github.com/thomasvaeth/trophy-ghost/blob/master/screenshots/screenshot-2.jpg "Desktop screenshot")

Post Page (Profile & Footer)
![Post Page](https://github.com/thomasvaeth/trophy-ghost/blob/master/screenshots/screenshot-3.jpg "Desktop screenshot")

Author Page
![Author Page](https://github.com/thomasvaeth/trophy-ghost/blob/master/screenshots/screenshot-4.jpg "Desktop screenshot")

## Usage
* The Public API must be enabled because the ````get```` helper is being used in the theme. This setting is at the bottom of the ````Labs```` page (v0.11.4).
* The recommended size for post images is 2000px x 1200px.
* Authors should have a 2-3 sentence biography about them that will appear on posts they write. The recommended size for author images is 1000px x 600px.

## Installation
All dependencies for development are saved in the ````package.json```` files. Run ````npm install```` or ````yarn install```` to download the packages before editing any JavaScript or Sass.

## Edit Theme
I made everything as easy as possible to edit. The ````head.hbs```` file is in the ````partials```` folder and the Sass variables are found in the ````_base.scss```` file in the ````dist/scss```` folder. Run ````gulp```` if any changes are made to the JavaScript or Sass files.

## Issues
Please submit any issues [here](https://github.com/thomasvaeth/trophy-ghost/issues).

## License
Trophy is licensed under the MIT License.
