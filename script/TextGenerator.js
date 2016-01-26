"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextShadowGenerator = function () {
  function TextShadowGenerator() {
    _classCallCheck(this, TextShadowGenerator);
  }

  _createClass(TextShadowGenerator, [{
    key: "generate_shadowd",
    value: function generate_shadowd(length, b_dif, color) {
      var strng = "";
      var b = 1;
      if (length > 0) {
        for (var a = 1; a <= length; a += 2) {
          strng += a + "px " + b + "px 0 " + color;
          if (a + 2 < length) {
            strng += ",";
          }
          b += b_dif;
        }
      } else {
        b = 5;
        for (var a = 0; a >= length; a -= 2) {
          strng += a + "px " + b + "px 0 " + color;
          if (a > length) {
            strng += ",";
          }
          b += b_dif;
        }
      }
      return strng;
    }
  }]);

  return TextShadowGenerator;
}();