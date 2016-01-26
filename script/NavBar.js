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