'use strict';

(function () {
  const calculatorContainer = document.querySelector(`.calculator__step-wrapper`);
  const buttonOpenSelect = calculatorContainer.querySelector(`button`);
  const labels = calculatorContainer.querySelectorAll(`label`);
  const renderStepTwo = window.stepTwo.renderStepTwo;

  calculatorContainer.addEventListener(`change`, () => {
    const input = calculatorContainer.querySelector(`input:checked`);
    renderStepTwo(input.value);
  });


  buttonOpenSelect.addEventListener(`click`, () => {
    calculatorContainer.classList.toggle(`open`);
  });

  for (const label of labels) {
    label.addEventListener(`click`, () => {
      calculatorContainer.classList.toggle(`open`);
    });
  }
})();
