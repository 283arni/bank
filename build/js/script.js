'use strict';

(function () {
  var targets = {
    house: {
      title: "\u0418\u043F\u043E\u0442\u0435\u043A\u0430",
      names: {
        fieldFullSum: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u043D\u0435\u0434\u0432\u0438\u0436\u0438\u043C\u043E\u0441\u0442\u0438",
        fieldSum: "\u0421\u0443\u043C\u043C\u0430 \u0438\u043F\u043E\u0442\u0435\u043A\u0438",
        lessSum: "\u0438\u043F\u043E\u0442\u0435\u0447\u043D\u044B\u0435 \u043A\u0440\u0435\u0434\u0438\u0442\u044B"
      },
      limits: {
        min: "1 200 000",
        max: "25 000 000"
      },
      minSum: 500000,
      step: 100000,
      percent: 10,
      years: {
        from: "5",
        to: "30"
      },
      offer: {
        sum: "",
        years: "",
        payment: ""
      }
    },
    car: {
      title: "\u0410\u0432\u0442\u043E\u043A\u0440\u0435\u0434\u0438\u0442",
      names: {
        fieldFullSum: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F",
        fieldSum: "\u0421\u0443\u043C\u043C\u0430 \u0430\u0432\u0442\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u0430",
        lessSum: "\u0430\u0432\u0442\u043E\u043A\u0440\u0435\u0434\u0438\u0442\u044B"
      },
      limits: {
        min: "500 000",
        max: "5 000 000"
      },
      percent: 20,
      minSum: 200000,
      step: 50000,
      years: {
        from: "1",
        to: "5"
      },
      offer: {
        sum: "",
        years: "",
        payment: ""
      }
    },
    credit: {
      title: "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442",
      names: {
        fieldFullSum: "\u0421\u0443\u043C\u043C\u0430 \u043F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0433\u043E \u043A\u0440\u0435\u0434\u0438\u0442\u0430",
        fieldSum: "\u0421\u0443\u043C\u043C\u0430 \u043A\u0440\u0435\u0434\u0438\u0442\u0430"
      },
      limits: {
        min: "50 000",
        max: "3 000 000"
      },
      percent: 0,
      step: 50000,
      years: {
        from: "1",
        to: "7"
      },
      offer: {
        sum: "",
        years: "",
        payment: "0 \u0440\u0443\u0431\u043B\u0435\u0439"
      }
    }
  };
  window.types = {
    targets: targets
  };
})();
'use strict';

(function () {
  var returnClearValue = function returnClearValue(sum) {
    return parseInt(sum.split(" ").join(""), 10).toString();
  };

  var transformYears = function transformYears(year) {
    if (!year) {
      return "";
    }

    year = returnClearValue(year);

    if (+year === 1) {
      return "".concat(year, " \u0433\u043E\u0434");
    }

    if (+year > 1 && +year < 5) {
      return "".concat(year, " \u0433\u043E\u0434\u0430");
    }

    return "".concat(year, " \u043B\u0435\u0442");
  };

  var transformValue = function transformValue(sum) {
    if (!sum) {
      return "";
    }

    sum = returnClearValue(sum);

    if (sum.length <= 6 && sum.length > 3) {
      return "".concat(sum.substring(sum.length - 3, 0), " ").concat(sum.substring(sum.length - 3), " \u0440\u0443\u0431\u043B\u0435\u0439");
    }

    if (sum.length > 6) {
      return "".concat(sum.substring(sum.length - 6, 0), " ").concat(sum.substring(sum.length - 3, sum.length - 6), " ").concat(sum.substring(sum.length - 3), " \u0440\u0443\u0431\u043B\u0435\u0439");
    }

    return "".concat(sum, " \u0440\u0443\u0431\u043B\u0435\u0439");
  };

  window.utils = {
    returnClearValue: returnClearValue,
    transformValue: transformValue,
    transformYears: transformYears
  };
})();
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
  var requestContainer = document.querySelector(".calculator__request");
  var target = requestContainer.querySelector("#request-target");
  var requestId = requestContainer.querySelector("#request-id");
  var sum = requestContainer.querySelector("#request-sum");
  var payment = requestContainer.querySelector("#request-payment");
  var years = requestContainer.querySelector("#request-years");
  var sumTitle = requestContainer.querySelector("#sum-title");
  var itemRequest = requestContainer.querySelector("#request-item");

  var renderStepThree = function renderStepThree(item) {
    requestContainer.style.display = "block";
    target.textContent = item.title;
    sumTitle.textContent = item.names.fieldFullSum;
    years.textContent = item.offer.years;
    sum.textContent = item.offer.sum;

    if (!item.offer.payment) {
      itemRequest.style.display = "none";
      return;
    }

    itemRequest.style.display = "flex";
    payment.textContent = item.offer.payment;
  };

  window.stepThree = {
    renderStepThree: renderStepThree
  };
})();
'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var blockStepTwo = document.querySelector(".calculator__step-two");
  var sumBlock = document.querySelector(".calculator__sum");
  var limit = sumBlock.querySelector("span");
  var sumWrapper = sumBlock.querySelector(".calculator__sum-wrapper");
  var minusButton = sumWrapper.querySelector("#btn-minus");
  var plusButton = sumWrapper.querySelector("#btn-plus");
  var inputSum = sumBlock.querySelector("input");
  var sumFullTitle = blockStepTwo.querySelector(".calculator__wrapper-two label");
  var pieceSum = blockStepTwo.querySelector(".calculator__piece");
  var fieldPieceSum = pieceSum.querySelector("input[type='text']");
  var rangePieceSum = pieceSum.querySelector("input[type='range']");
  var percent = pieceSum.querySelector("span");
  var fieldYears = blockStepTwo.querySelector("#years");
  var rangeYears = blockStepTwo.querySelector("#range-years");
  var fromYears = blockStepTwo.querySelector(".calculator__years-limit span:first-of-type");
  var toYears = blockStepTwo.querySelector(".calculator__years-limit span:last-of-type");
  var checkboxesLabel = blockStepTwo.querySelectorAll("#checkbox");
  var checkboxes = blockStepTwo.querySelectorAll("input[type=\"checkbox\"]");
  var blockOffer = document.querySelector(".calculator__offer");
  var sumTitle = blockOffer.querySelector("ul li:first-of-type span:last-of-type");
  var sumOffer = blockOffer.querySelector("#info-sum");
  var percentOffer = blockOffer.querySelector("#info-percent");
  var everyMonthPayment = blockOffer.querySelector("#info-piece");
  var needSalary = blockOffer.querySelector("#info-salary");
  var offerButton = blockOffer.querySelector("button");
  var blockBack = document.querySelector(".calculator__back");
  var textCredit = blockBack.querySelector("span:first-of-type");
  var textMoney = blockBack.querySelector("span:last-of-type");
  var transformValue = window.utils.transformValue;
  var returnClearValue = window.utils.returnClearValue;
  var transformYears = window.utils.transformYears;
  var targets = window.types.targets;
  var renderStepThree = window.stepThree.renderStepThree;
  var globalItem = null;

  var addFirstPayment = function addFirstPayment() {
    var price = +returnClearValue(inputSum.value);
    var percentPrice = price / 100 * +rangePieceSum.value;
    return transformValue(percentPrice.toString());
  };

  var addPercentFirstPayment = function addPercentFirstPayment(percentMin) {
    var newPercent = parseInt(+returnClearValue(fieldPieceSum.value) / +returnClearValue(inputSum.value) * 100, 10);
    rangePieceSum.setAttribute("value", percentMin || newPercent);
    rangePieceSum.value = percentMin || newPercent;
    return newPercent;
  };

  var returnPercentRate = function returnPercentRate() {
    var insurance = blockStepTwo.querySelector("#insurance");
    var lifeInsurance = blockStepTwo.querySelector("#life-insurance");
    var salaryBox = blockStepTwo.querySelector("#salary");

    if (globalItem.title === "\u0410\u0432\u0442\u043E\u043A\u0440\u0435\u0434\u0438\u0442") {
      if (insurance.checked && lifeInsurance.checked) {
        return "3.5%";
      }

      if (insurance.checked || lifeInsurance.checked) {
        return "8.5%";
      }

      return +returnClearValue(inputSum.value) - +returnClearValue(fieldPieceSum.value) < 2000000 ? "16%" : "15%";
    }

    if (globalItem.title === "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442") {
      var salaryClientRate = salaryBox.checked ? 0.5 : 0;

      if (+returnClearValue(inputSum.value) < 750000) {
        return "".concat(15 - salaryClientRate, "%");
      }

      return +returnClearValue(inputSum.value) < 2000000 ? "".concat(12.5 - salaryClientRate, "%") : "".concat(9.5 - salaryClientRate, "%");
    }

    return +rangePieceSum.value >= 15 ? "8.5%" : "9.4%";
  };

  var addInfoOffer = function addInfoOffer() {
    var motherMoney = blockStepTwo.querySelector("#mother-money");
    var sum = +returnClearValue(inputSum.value) - +returnClearValue(fieldPieceSum.value);

    if (motherMoney.checked) {
      sum -= +motherMoney.value;
    }

    if (sum < globalItem.minSum) {
      blockOffer.style.display = "none";
      blockBack.style.display = "block";
    }

    if (sum >= globalItem.minSum) {
      blockOffer.style.display = "block";
      blockBack.style.display = "none";
    }

    var percentRate = returnPercentRate();
    var amountMonths = +returnClearValue(fieldYears.value) * 12;
    var percentRateFormula = parseFloat(percentRate, 10) / 100 / 12;
    var formula = Math.pow(1 + percentRateFormula, amountMonths) - 1;
    var paymentEveryMonth = sum * (percentRateFormula + percentRateFormula / formula);
    everyMonthPayment.textContent = transformValue(paymentEveryMonth.toString());
    var salary = +returnClearValue(everyMonthPayment.textContent) * (100 / 45);
    sumOffer.textContent = transformValue(sum.toString());
    needSalary.textContent = transformValue(salary.toString());
    percentOffer.textContent = percentRate;
    globalItem.offer.sum = inputSum.value;
    globalItem.offer.payment = globalItem.title === "\u041F\u043E\u0442\u0440\u0435\u0431\u0438\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u043A\u0440\u0435\u0434\u0438\u0442" ? null : fieldPieceSum.value;
    globalItem.offer.years = fieldYears.value;
  };

  var addPercentYears = function addPercentYears() {
    var years = returnClearValue(fieldYears.value);
    rangeYears.setAttribute("value", years);
    rangeYears.value = years;
  };

  var calcSumField = function calcSumField(item, flag) {
    var newSum;

    if (!inputSum.value) {
      return;
    }

    if (flag) {
      newSum = +returnClearValue(inputSum.value) + item.step;
    } else {
      newSum = +returnClearValue(inputSum.value) - item.step;
    }

    inputSum.value = transformValue(newSum.toString());

    if (+returnClearValue(inputSum.value) >= +returnClearValue(item.limits.max)) {
      calcFirstPayment(item.limits.max);
      return;
    }

    if (+returnClearValue(inputSum.value) <= +returnClearValue(item.limits.min)) {
      calcFirstPayment(item.limits.min);
      return;
    }

    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  var calcYearsField = function calcYearsField(value) {
    fieldYears.value = transformYears(value);
    addPercentYears();
    addInfoOffer();
  };

  var calcFirstPayment = function calcFirstPayment(limitValue) {
    inputSum.value = transformValue(limitValue);
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  var onSumFieldChange = function onSumFieldChange() {
    sumWrapper.classList.remove("error");
    inputSum.placeholder = "";

    if (+returnClearValue(inputSum.value) < +returnClearValue(globalItem.limits.min) || +returnClearValue(inputSum.value) > +returnClearValue(globalItem.limits.max)) {
      sumWrapper.classList.add("error");
      inputSum.value = "";
      inputSum.placeholder = "\u041D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435";
      return;
    }

    inputSum.value = transformValue(inputSum.value);
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  var onPlusButtonClick = function onPlusButtonClick() {
    calcSumField(globalItem, true);
  };

  var onMinusButtonClick = function onMinusButtonClick() {
    calcSumField(globalItem, false);
  };

  var onYearsFieldChange = function onYearsFieldChange() {
    if (+fieldYears.value < +returnClearValue(globalItem.years.from)) {
      calcYearsField(globalItem.years.from);
      return;
    }

    if (+fieldYears.value > +returnClearValue(globalItem.years.to)) {
      calcYearsField(globalItem.years.to);
      return;
    }

    fieldYears.value = transformYears(fieldYears.value);
    calcYearsField(fieldYears.value);
  };

  var onInputKeydown = function onInputKeydown(e) {
    if (e.keyCode > 64 && e.keyCode < 91 || e.keyCode > 157 && e.keyCode < 223 || e.keyCode === 32) {
      e.preventDefault();
    }
  };

  var onPieceSumChange = function onPieceSumChange() {
    var percentSum = addPercentFirstPayment();

    if (percentSum <= globalItem.percent) {
      addPercentFirstPayment(globalItem.percent);
      fieldPieceSum.value = addFirstPayment();
      addInfoOffer();
      return;
    }

    fieldPieceSum.value = transformValue(fieldPieceSum.value);
    addInfoOffer();
  };

  var onRangePieceSumChange = function onRangePieceSumChange() {
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  var onRangeYearsChange = function onRangeYearsChange() {
    fieldYears.value = transformYears(rangeYears.value);
    addInfoOffer();
  };

  var onOfferButtonClick = function onOfferButtonClick() {
    renderStepThree(globalItem);
  };

  var renderCheckboxes = function renderCheckboxes(title) {
    var _iterator = _createForOfIteratorHelper(checkboxesLabel.entries()),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            i = _step$value[0],
            checkbox = _step$value[1];

        checkbox.style.display = "none";
        checkboxes[i].checked = false;

        if (checkbox.dataset.title === title) {
          checkbox.style.display = "flex";
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var renderStepTwo = function renderStepTwo(item) {
    globalItem = item;
    var firstPayment = (+returnClearValue(item.limits.min) / 100 * item.percent).toString();
    blockStepTwo.style.display = "block";
    blockOffer.style.display = "block";
    pieceSum.style.display = pieceSum.dataset.title === item.title ? "none" : "flex";
    sumFullTitle.textContent = item.names.fieldFullSum;
    limit.textContent = "\u041E\u0442 ".concat(item.limits.min, " \u0434\u043E ").concat(item.limits.max, " \u0440\u0443\u0431\u043B\u0435\u0439");
    sumTitle.textContent = item.names.fieldSum;
    inputSum.value = transformValue(returnClearValue(item.limits.min));
    fieldPieceSum.value = transformValue(firstPayment);
    rangePieceSum.setAttribute("min", item.percent);
    rangePieceSum.setAttribute("value", item.percent);
    rangePieceSum.value = item.percent;
    percent.textContent = "".concat(item.percent, "%");
    fieldYears.value = transformYears(item.years.from);
    rangeYears.setAttribute("min", item.years.from);
    rangeYears.setAttribute("max", item.years.to);
    rangeYears.setAttribute("value", item.years.from);
    rangeYears.value = item.years.from;
    fromYears.textContent = transformYears(item.years.from);
    toYears.textContent = transformYears(item.years.to);
    textCredit.textContent = item.names.lessSum || null;
    textMoney.textContent = transformValue(item.minSum ? item.minSum.toString() : null);
    renderCheckboxes(item.title);
    addInfoOffer();
  };

  var toggleToStepTwo = function toggleToStepTwo(value) {
    switch (value) {
      case "house":
        renderStepTwo(targets.house);
        break;

      case "car":
        renderStepTwo(targets.car);
        break;

      case "credit":
        renderStepTwo(targets.credit);
        break;

      case "default":
        blockStepTwo.style.display = "none";
        blockOffer.style.display = "none";
        break;
    }
  };

  inputSum.addEventListener("change", onSumFieldChange);
  fieldYears.addEventListener("change", onYearsFieldChange);
  fieldPieceSum.addEventListener("change", onPieceSumChange);
  rangePieceSum.addEventListener("change", onRangePieceSumChange);
  rangeYears.addEventListener("change", onRangeYearsChange);
  plusButton.addEventListener("click", onPlusButtonClick);
  minusButton.addEventListener("click", onMinusButtonClick);
  offerButton.addEventListener("click", onOfferButtonClick);
  inputSum.addEventListener("keydown", onInputKeydown);
  fieldPieceSum.addEventListener("keydown", onInputKeydown);
  fieldYears.addEventListener("keydown", onInputKeydown);

  var _iterator2 = _createForOfIteratorHelper(checkboxes),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var checkbox = _step2.value;
      checkbox.addEventListener("change", addInfoOffer);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  window.stepTwo = {
    toggleToStepTwo: toggleToStepTwo
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
  var toggleToStepTwo = window.stepTwo.toggleToStepTwo;
  calculatorContainer.addEventListener("change", function () {
    var input = calculatorContainer.querySelector("input:checked");
    toggleToStepTwo(input.value);
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
