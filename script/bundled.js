"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NavBar = function () {
  function NavBar(element) {
    _classCallCheck(this, NavBar);

    this.element = element;
    this.navbar_state = 0;
  }

  _createClass(NavBar, [{
    key: "getNavBarState",
    value: function getNavBarState() {
      return this.navbar_state;
    }
  }, {
    key: "OpenNavBar",
    value: function OpenNavBar() {
      this.navbar_state = 1;
      $(this.element).animate({
        height: "150px"
      }, 100);
    }
  }, {
    key: "CloseNavBar",
    value: function CloseNavBar() {
      this.navbar_state = 0;
      $(this.element).animate({
        height: "0px"
      }, 100);
    }
  }]);

  return NavBar;
}();
//Handle Resizes

window.onresize = function () {
  $(".large_text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
};
//Smooth Scroll	ing Anchors
$(document).ready(function () {
  $(".large_text").css("font-size", $("html").height() / 85 / 2 + $("html").width() / 135 / 2 + "em");
  $('a').click(function () {
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
    return false;
  });

  //Mobile Nav Bar
  var NavigationBar = new NavBar(".button_container_mobile");
  $(".button_mobile").click(function () {
    if (NavigationBar.getNavBarState() == 1) {
      NavigationBar.CloseNavBar();
    }
  });
  $(".button_mobile_dropdown").click(function () {
    if (NavigationBar.getNavBarState() == 0) {
      NavigationBar.OpenNavBar();
    } else if (NavigationBar.getNavBarState() == 1) {
      NavigationBar.CloseNavBar();
    }
  });

  //Shadow Generation
  var Shadow_Gen = new TextShadowGenerator();
  $(".alpha").css("text-shadow", Shadow_Gen.generate_shadowd(1200, 1, "#4B0082"));
  $(".dev").css("text-shadow", Shadow_Gen.generate_shadowd(1200, 1, "	#3b0066"));
});

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
