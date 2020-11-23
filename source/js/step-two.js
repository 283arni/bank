'use strict';

(function () {
  const blockStepTwo = document.querySelector(`.calculator__step-two`);
  const sumBlock = document.querySelector(`.calculator__sum`);
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
  const checkboxesLabel = blockStepTwo.querySelectorAll(`#checkbox`);
  const checkboxes = blockStepTwo.querySelectorAll(`input[type="checkbox"]`);

  const blockOffer = document.querySelector(`.calculator__offer`);
  const sumTitle = blockOffer.querySelector(`ul li:first-of-type span:last-of-type`);
  const sumOffer = blockOffer.querySelector(`#info-sum`);
  const percentOffer = blockOffer.querySelector(`#info-percent`);
  const everyMonthPayment = blockOffer.querySelector(`#info-piece`);
  const needSalary = blockOffer.querySelector(`#info-salary`);
  const offerButton = blockOffer.querySelector(`button`);

  const blockBack = document.querySelector(`.calculator__back`);
  const textCredit = blockBack.querySelector(`span:first-of-type`);
  const textMoney = blockBack.querySelector(`span:last-of-type`);


  const transformValue = window.utils.transformValue;
  const returnClearValue = window.utils.returnClearValue;
  const transformYears = window.utils.transformYears;
  const targets = window.types.targets;
  const renderStepThree = window.stepThree.renderStepThree;
  let globalItem = null;

  const addFirstPayment = () => {
    const price = +returnClearValue(inputSum.value);
    const percentPrice = (price / 100) * +rangePieceSum.value;
    return transformValue(percentPrice.toString());
  };

  const addPercentFirstPayment = (percentMin) => {
    const newPercent = parseInt((+returnClearValue(fieldPieceSum.value) / +returnClearValue(inputSum.value)) * 100, 10);

    rangePieceSum.setAttribute(`value`, percentMin || newPercent);
    rangePieceSum.value = percentMin || newPercent;
    return newPercent;
  };

  const returnPercentRate = () => {
    const insurance = blockStepTwo.querySelector(`#insurance`);
    const lifeInsurance = blockStepTwo.querySelector(`#life-insurance`);
    const salaryBox = blockStepTwo.querySelector(`#salary`);

    if (globalItem.title === `Автокредит`) {
      if (insurance.checked && lifeInsurance.checked) {
        return `3.5%`;
      }

      if (insurance.checked || lifeInsurance.checked) {
        return `8.5%`;
      }

      return +returnClearValue(inputSum.value) - +returnClearValue(fieldPieceSum.value) < 2000000 ? `16%` : `15%`;
    }

    if (globalItem.title === `Потребительский кредит`) {
      const salaryClientRate = salaryBox.checked ? 0.5 : 0;

      if (+returnClearValue(inputSum.value) < 750000) {
        return `${15 - salaryClientRate}%`;
      }

      return +returnClearValue(inputSum.value) < 2000000 ? `${12.5 - salaryClientRate}%` : `${9.5 - salaryClientRate}%`;
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
    const amountMonths = +returnClearValue(fieldYears.value) * 12;
    const percentRateFormula = (parseFloat(percentRate, 10) / 100) / 12;
    const formula = Math.pow(1 + percentRateFormula, amountMonths) - 1;
    const paymentEveryMonth = sum * (percentRateFormula + percentRateFormula / formula);

    everyMonthPayment.textContent = transformValue(paymentEveryMonth.toString());

    const salary = +returnClearValue(everyMonthPayment.textContent) * (100 / 45);

    sumOffer.textContent = transformValue(sum.toString());
    needSalary.textContent = transformValue(salary.toString());
    percentOffer.textContent = percentRate;

    globalItem.offer.sum = inputSum.value;
    globalItem.offer.payment = globalItem.title === `Потребительский кредит` ? null : fieldPieceSum.value;
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
    if ((e.keyCode > 64 && e.keyCode < 91) || (e.keyCode > 157 && e.keyCode < 223) || e.keyCode === 32) {
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
    const firstPayment = ((+returnClearValue(item.limits.min) / 100) * item.percent).toString();

    blockStepTwo.style.display = `block`;
    blockOffer.style.display = `block`;
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
      case `house`:
        renderStepTwo(targets.house);
        break;
      case `car`:
        renderStepTwo(targets.car);
        break;
      case `credit`:
        renderStepTwo(targets.credit);
        break;
      case `default`:
        blockStepTwo.style.display = `none`;
        blockOffer.style.display = `none`;
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

  for (const checkbox of checkboxes) {
    checkbox.addEventListener(`change`, addInfoOffer);
  }

  window.stepTwo = {
    toggleToStepTwo
  };
})();
