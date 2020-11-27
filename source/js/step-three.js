'use strict';

(function () {
  const Numeral = {
    FIRST_REQUEST: 1,
    SECOND: 1000
  };

  const blockStepTwo = document.querySelector(`.calculator__step-two`);
  const blockOffer = document.querySelector(`.calculator__offer`);
  const defaultSelect = document.querySelector(`#option-1`);
  const requestContainer = document.querySelector(`.calculator__request`);
  const templateThanks = document.querySelector(`#popup-thanks`).content;

  if (!blockStepTwo || !blockOffer || !defaultSelect || !requestContainer || !templateThanks) {
    return;
  }

  const target = requestContainer.querySelector(`#request-target`);
  const requestId = requestContainer.querySelector(`#request-id`);
  const sum = requestContainer.querySelector(`#request-sum`);
  const payment = requestContainer.querySelector(`#request-payment`);
  const years = requestContainer.querySelector(`#request-years`);
  const sumTitle = requestContainer.querySelector(`#sum-title`);
  const itemRequest = requestContainer.querySelector(`#request-item`);
  const submitButton = requestContainer.querySelector(`button`);
  const name = requestContainer.querySelector(`input[type='text']`);
  const inputs = requestContainer.querySelectorAll(`input`);
  let number = Numeral.FIRST_REQUEST;

  const cloneThanks = templateThanks.querySelector(`.thanks`).cloneNode(true);

  const Popup = window.Popup;
  const popup = new Popup(cloneThanks);

  const closeStepsBlock = () => {
    blockStepTwo.style.display = `none`;
    blockOffer.style.display = `none`;
    requestContainer.style.display = `none`;
    defaultSelect.checked = true;
  };

  const saveAndClearFields = () => {

    let person = {
      name: ``,
      tel: ``,
      email: ``
    };

    for (const input of inputs) {
      if (input.type === `email`) {
        person.email = input.value;
      }

      if (input.type === `text`) {
        person.name = input.value;
      }

      if (input.type === `tel`) {
        person.tel = input.value;
      }

      input.value = ``;
    }

    localStorage.setItem(`person`, JSON.stringify(person));
  };

  const renderStepThree = (item) => {
    requestContainer.style.display = `block`;
    requestId.textContent = `№ 00${number}`;
    target.textContent = item.title;
    sumTitle.textContent = item.names.fieldFullSum;
    years.textContent = item.offer.years;
    sum.textContent = item.offer.sum;

    name.focus();

    if (!item.offer.payment) {
      itemRequest.style.display = `none`;
      return;
    }

    itemRequest.style.display = `flex`;
    payment.textContent = item.offer.payment;
  };

  const removeErrorClass = () => {
    for (const input of inputs) {
      input.classList.remove(`error`);
    }
  };

  submitButton.addEventListener(`click`, (e) => {
    let isValid = true;

    e.preventDefault();

    for (const input of inputs) {
      if (!input.validity.valid) {
        input.classList.add(`error`);
        input.value = ``;
        isValid = false;
      }
    }

    if (isValid) {
      popup.openPopup();
      saveAndClearFields();
      closeStepsBlock();
      number++;
    }

    setTimeout(() => {
      removeErrorClass();
    }, Numeral.SECOND);
  });

  window.stepThree = {
    renderStepThree
  };
})();
