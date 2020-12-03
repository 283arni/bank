'use strict';

(function () {
  const requestContainer = document.querySelector(`.calculator__request`);
  const blockStepTwo = document.querySelector(`.calculator__step-two`);
  const blockOffer = document.querySelector(`.calculator__offer`);
  const blockBack = document.querySelector(`.calculator__back`);


  if (!requestContainer || !blockStepTwo || !blockOffer || !blockBack) {
    return;
  }

  const SALARY_PERCENT = 45;

  const Select = {
    HOUSE: `Ипотека`,
    CAR: `Автокредит`,
    CREDIT: `Потребительский кредит`,
    DEFAULT: `default`
  };

  const KeyButton = {
    FIRST_LITTER: 64,
    LAST_LITTER: 91,
    FIRST_SYMBOL: 157,
    LAST_SYMBOL: 223,
    SPACE: 32,
    ENTER: 13,
    ENTER_NAME: `Enter`
  };

  const Numeral = {
    MONTHS: 12,
    HUNDRED: 100,
  };

  const Limit = {
    MIDDLE: 750000,
    MAX: 2000000
  };

  const sumBlock = blockStepTwo.querySelector(`.calculator__sum`);
  const limit = sumBlock.querySelector(`span`);
  const sumWrapper = sumBlock.querySelector(`.calculator__sum-wrapper`);
  const minusButton = sumWrapper.querySelector(`#btn-minus`);
  const plusButton = sumWrapper.querySelector(`#btn-plus`);
  const inputSum = sumBlock.querySelector(`input`);
  const sumFullTitle = blockStepTwo.querySelector(`.calculator__wrapper-two label`);
  const pieceSum = blockStepTwo.querySelector(`.calculator__piece`);
  const fieldPieceSum = pieceSum.querySelector(`input[type='text']`);
  const rangePieceSum = pieceSum.querySelector(`input[type='range']`);
  const percent = pieceSum.querySelector(`span`);
  const fieldYears = blockStepTwo.querySelector(`#years`);
  const rangeYears = blockStepTwo.querySelector(`#range-years`);
  const fromYears = blockStepTwo.querySelector(`.calculator__years-limit span:first-of-type`);
  const toYears = blockStepTwo.querySelector(`.calculator__years-limit span:last-of-type`);
  const checkboxesLabel = blockStepTwo.querySelectorAll(`input[type='checkbox'] + label`);
  const checkboxesVisible = blockStepTwo.querySelectorAll(`input[type='checkbox'] + label span`);
  const checkboxes = blockStepTwo.querySelectorAll(`input[type="checkbox"]`);

  const sumTitle = blockOffer.querySelector(`ul li:first-of-type span:last-of-type`);
  const sumOffer = blockOffer.querySelector(`#info-sum`);
  const percentOffer = blockOffer.querySelector(`#info-percent`);
  const everyMonthPayment = blockOffer.querySelector(`#info-piece`);
  const needSalary = blockOffer.querySelector(`#info-salary`);
  const offerButton = blockOffer.querySelector(`button`);

  const textCredit = blockBack.querySelector(`span:first-of-type`);
  const textMoney = blockBack.querySelector(`span:last-of-type`);


  const transformValue = window.utils.transformValue;
  const returnClearValue = window.utils.returnClearValue;
  const transformYears = window.utils.transformYears;
  const targets = window.mocks.targets;
  const renderStepThree = window.stepThree.renderStepThree;
  let globalItem = null;

  const addFirstPayment = () => {
    const price = +returnClearValue(inputSum.value);
    const percentPrice = (price / Numeral.HUNDRED) * +rangePieceSum.value;
    percent.textContent = `${rangePieceSum.value}%`;
    return transformValue(percentPrice.toString());
  };

  const addPercentFirstPayment = (percentMin) => {
    const newPercent = parseInt((+returnClearValue(fieldPieceSum.value) / +returnClearValue(inputSum.value)) * Numeral.HUNDRED, 10);

    rangePieceSum.setAttribute(`value`, percentMin || newPercent);
    rangePieceSum.value = percentMin || newPercent;
    percent.textContent = `${newPercent}%`;
    return newPercent;
  };

  const returnPercentRate = () => {
    const insurance = blockStepTwo.querySelector(`#insurance`);
    const lifeInsurance = blockStepTwo.querySelector(`#life-insurance`);
    const salaryBox = blockStepTwo.querySelector(`#salary`);

    if (globalItem.title === Select.CAR) {
      if (insurance.checked && lifeInsurance.checked) {
        return `3.5%`;
      }

      if (insurance.checked || lifeInsurance.checked) {
        return `8.5%`;
      }

      return +returnClearValue(inputSum.value) < Limit.MAX ? `16%` : `15%`;
    }

    if (globalItem.title === Select.CREDIT) {
      const salaryClientRate = salaryBox.checked ? 0.5 : 0;

      if (+returnClearValue(inputSum.value) < Limit.MIDDLE) {
        return `${15 - salaryClientRate}%`;
      }

      return +returnClearValue(inputSum.value) < Limit.MAX ? `${12.5 - salaryClientRate}%` : `${9.5 - salaryClientRate}%`;
    }

    return +rangePieceSum.value >= 15 ? `8.5%` : `9.4%`;
  };

  const addInfoOffer = () => {
    const motherMoney = blockStepTwo.querySelector(`#mother-money`);
    let sum = +returnClearValue(inputSum.value) - +returnClearValue(fieldPieceSum.value);

    if (motherMoney.checked) {
      sum -= +motherMoney.value;
    }

    if (sum < globalItem.minSum) {
      blockOffer.style.display = `none`;
      blockBack.style.display = `block`;
    }

    if (sum >= globalItem.minSum) {
      blockOffer.style.display = `block`;
      blockBack.style.display = `none`;
    }

    const percentRate = returnPercentRate();
    const amountMonths = +returnClearValue(fieldYears.value) * Numeral.MONTHS;
    const percentRateFormula = (parseFloat(percentRate, 10) / Numeral.HUNDRED) / Numeral.MONTHS;
    const formula = Math.pow(1 + percentRateFormula, amountMonths) - 1;
    const paymentEveryMonth = sum * (percentRateFormula + percentRateFormula / formula);

    everyMonthPayment.textContent = transformValue(paymentEveryMonth.toString());

    const salary = +returnClearValue(everyMonthPayment.textContent) * (Numeral.HUNDRED / SALARY_PERCENT);

    sumOffer.textContent = transformValue(sum.toString());
    needSalary.textContent = transformValue(salary.toString());
    percentOffer.textContent = percentRate;

    globalItem.offer.sum = inputSum.value;
    globalItem.offer.payment = globalItem.title === Select.CREDIT ? null : fieldPieceSum.value;
    globalItem.offer.years = fieldYears.value;
  };

  const addPercentYears = () => {
    const years = returnClearValue(fieldYears.value);

    rangeYears.setAttribute(`value`, years);
    rangeYears.value = years;
  };

  const calcSumField = (item, flag) => {
    let newSum;

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

  const calcYearsField = (value) => {
    fieldYears.value = transformYears(value);
    addPercentYears();
    addInfoOffer();
  };

  const calcFirstPayment = (limitValue) => {
    inputSum.value = transformValue(limitValue);
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  const onSumFieldChange = () => {

    sumWrapper.classList.remove(`error`);
    inputSum.placeholder = ``;

    if (+returnClearValue(inputSum.value) < +returnClearValue(globalItem.limits.min) || +returnClearValue(inputSum.value) > +returnClearValue(globalItem.limits.max)) {
      sumWrapper.classList.add(`error`);
      inputSum.value = ``;
      inputSum.placeholder = `Некорректное значение`;
      return;
    }

    inputSum.value = transformValue(inputSum.value);
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  const onPlusButtonClick = () => {
    calcSumField(globalItem, true);
  };

  const onMinusButtonClick = () => {
    calcSumField(globalItem, false);
  };

  const onYearsFieldChange = () => {
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

  const onInputKeydown = (e) => {
    if ((e.keyCode > KeyButton.FIRST_LITTER && e.keyCode < KeyButton.LAST_LITTER) || (e.keyCode > KeyButton.FIRST_SYMBOL && e.keyCode < KeyButton.LAST_SYMBOL) || e.keyCode === KeyButton.SPACE) {
      e.preventDefault();
    }
  };

  const onPieceSumChange = () => {
    const percentSum = addPercentFirstPayment();

    if (percentSum <= globalItem.percent) {
      addPercentFirstPayment(globalItem.percent);
      fieldPieceSum.value = addFirstPayment();
      addInfoOffer();
      return;
    }

    fieldPieceSum.value = transformValue(fieldPieceSum.value);
    addInfoOffer();
  };

  const onRangePieceSumChange = () => {
    fieldPieceSum.value = addFirstPayment();
    addInfoOffer();
  };

  const onRangeYearsChange = () => {
    fieldYears.value = transformYears(rangeYears.value);
    addInfoOffer();
  };

  const onOfferButtonClick = () => {
    renderStepThree(globalItem);
  };

  const onCheckboxKeydown = (e) => {
    if (e.keyCode === KeyButton.ENTER || e.key === KeyButton.ENTER_NAME) {
      e.target.parentElement.control.click();
    }
  };

  const renderCheckboxes = (title) => {
    for (const [i, checkbox] of checkboxesLabel.entries()) {
      checkbox.style.display = `none`;
      checkboxes[i].checked = false;

      if (checkbox.dataset.title === title) {
        checkbox.style.display = `flex`;
      }
    }
  };

  const renderStepTwo = (item) => {
    globalItem = item;
    const firstPayment = ((+returnClearValue(item.limits.min) / Numeral.HUNDRED) * item.percent).toString();

    blockStepTwo.style.display = `block`;
    blockOffer.style.display = `block`;
    requestContainer.style.display = `none`;
    pieceSum.style.display = pieceSum.dataset.title === item.title ? `none` : `flex`;

    sumFullTitle.textContent = item.names.fieldFullSum;
    limit.textContent = `От ${item.limits.min} до ${item.limits.max} рублей`;
    sumTitle.textContent = item.names.fieldSum;
    inputSum.value = transformValue(returnClearValue(item.limits.min));
    fieldPieceSum.value = transformValue(firstPayment);
    rangePieceSum.setAttribute(`min`, item.percent);
    rangePieceSum.setAttribute(`value`, item.percent);
    rangePieceSum.value = item.percent;
    percent.textContent = `${item.percent}%`;
    fieldYears.value = transformYears(item.years.from);
    rangeYears.setAttribute(`min`, item.years.from);
    rangeYears.setAttribute(`max`, item.years.to);
    rangeYears.setAttribute(`value`, item.years.from);
    rangeYears.value = item.years.from;
    fromYears.textContent = transformYears(item.years.from);
    toYears.textContent = transformYears(item.years.to);
    textCredit.textContent = item.names.lessSum || null;
    textMoney.textContent = transformValue(item.minSum ? item.minSum.toString() : null);

    renderCheckboxes(item.title);
    addInfoOffer();
  };

  const toggleToStepTwo = (value) => {
    switch (value) {
      case Select.HOUSE:
        renderStepTwo(targets.house);
        break;
      case Select.CAR:
        renderStepTwo(targets.car);
        break;
      case Select.CREDIT:
        renderStepTwo(targets.credit);
        break;
      case Select.DEFAULT:
        blockStepTwo.style.display = `none`;
        blockOffer.style.display = `none`;
        requestContainer.style.display = `none`;
        break;
    }
  };


  inputSum.addEventListener(`change`, onSumFieldChange);
  fieldYears.addEventListener(`change`, onYearsFieldChange);
  fieldPieceSum.addEventListener(`change`, onPieceSumChange);
  rangePieceSum.addEventListener(`change`, onRangePieceSumChange);
  rangeYears.addEventListener(`change`, onRangeYearsChange);
  plusButton.addEventListener(`click`, onPlusButtonClick);
  minusButton.addEventListener(`click`, onMinusButtonClick);
  offerButton.addEventListener(`click`, onOfferButtonClick);
  inputSum.addEventListener(`keydown`, onInputKeydown);
  fieldPieceSum.addEventListener(`keydown`, onInputKeydown);
  fieldYears.addEventListener(`keydown`, onInputKeydown);

  for (const [i, checkbox] of checkboxes.entries()) {
    checkbox.addEventListener(`change`, addInfoOffer);
    checkboxesVisible[i].addEventListener(`keydown`, onCheckboxKeydown);
  }

  window.stepTwo = {
    toggleToStepTwo
  };
})();
