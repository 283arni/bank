'use strict';

(function () {
  const calculatorContainer = document.querySelector(`.calculator__step-wrapper`);
  const buttonOpenSelect = calculatorContainer.querySelector(`button`);
  const labels = calculatorContainer.querySelectorAll(`label`);
  const toggleToStepTwo = window.stepTwo.toggleToStepTwo;

  calculatorContainer.addEventListener(`change`, () => {
    const input = calculatorContainer.querySelector(`input:checked`);
    toggleToStepTwo(input.value);
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
