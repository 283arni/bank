'use strict';

(function () {
  const blockStepTwo = document.querySelector(`.calculator__step-two`);
  const blockOffer = document.querySelector(`.calculator__offer`);

  const renderStepTwo = (value) => {
    switch (value) {
      case `house`:
        blockStepTwo.style.display = `block`;
        blockOffer.style.display = `block`;
        break;
      case `car`:
        console.log(value);
        break;
      case `credit`:
        console.log(value);
        break;
      case `default`:
        console.log(value);
        break;
    }
  };

  window.stepTwo = {
    renderStepTwo
  };
})();
