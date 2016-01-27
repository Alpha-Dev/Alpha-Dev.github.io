echo building
copy babel\*js /a babel\bundled_babel.es6 /b /y && sass --update sass:css --style compressed && babel babel\bundled_babel.es6 -o script\bundled.js

