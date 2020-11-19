"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var Swiper = window.Swiper;

  if (!Swiper) {
    return;
  }

  var slider = document.querySelector(".slider");
  var swiperTabs;
  var swiper = new Swiper(slider, {
    loop: true,
    // autoplay: {
    //   delay: 4000
    // },
    pagination: {
      el: ".slider__pagination"
    },
    breakpoints: {
      1024: {
        noSwiping: true,
        noSwipingClass: "slider",
        pagination: {
          clickable: true
        }
      }
    }
  });

  if (document.documentElement.clientWidth < 1024) {
    var services = document.querySelector(".services__wrapper form");
    var wrapper = services.querySelector("form > ul");
    var items = services.querySelectorAll("form > ul li");
    services.classList.add("swiper-container");
    wrapper.classList.add("swiper-wrapper");

    var _iterator = _createForOfIteratorHelper(items),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var item = _step.value;
        item.classList.add("swiper-slide");
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    swiperTabs = new Swiper(services, {
      breakpoints: {
        280: {
          loop: true,
          pagination: {
            el: ".services__pagination"
          }
        },
        1024: {
          loop: false,
          noSwiping: true,
          noSwipingClass: "swiper-container"
        }
      }
    });
  }

  window.slider = {
    swiperTabs: swiperTabs,
    swiper: swiper
  };
})();
'use strict';

(function () {
  var blockStepTwo = document.querySelector(".calculator__step-two");
  var blockOffer = document.querySelector(".calculator__offer");

  var renderStepTwo = function renderStepTwo(value) {
    switch (value) {
      case "house":
        blockStepTwo.style.display = "block";
        blockOffer.style.display = "block";
        break;

      case "car":
        console.log(value);
        break;

      case "credit":
        console.log(value);
        break;

      case "default":
        console.log(value);
        break;
    }
  };

  window.stepTwo = {
    renderStepTwo: renderStepTwo
  };
})();
'use strict';

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var calculatorContainer = document.querySelector(".calculator__step-wrapper");
  var buttonOpenSelect = calculatorContainer.querySelector("button");
  var labels = calculatorContainer.querySelectorAll("label");
  var renderStepTwo = window.stepTwo.renderStepTwo;
  calculatorContainer.addEventListener("change", function () {
    var input = calculatorContainer.querySelector("input:checked");
    renderStepTwo(input.value);
  });
  buttonOpenSelect.addEventListener("click", function () {
    calculatorContainer.classList.toggle("open");
  });

  var _iterator = _createForOfIteratorHelper(labels),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var label = _step.value;
      label.addEventListener("click", function () {
        calculatorContainer.classList.toggle("open");
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
})();
//# sourceMappingURL=script.js.map
