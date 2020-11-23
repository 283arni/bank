'use strict';

(function () {
  const requestContainer = document.querySelector(`.calculator__request`);
  const target = requestContainer.querySelector(`#request-target`);
  const requestId = requestContainer.querySelector(`#request-id`);
  const sum = requestContainer.querySelector(`#request-sum`);
  const payment = requestContainer.querySelector(`#request-payment`);
  const years = requestContainer.querySelector(`#request-years`);
  const sumTitle = requestContainer.querySelector(`#sum-title`);
  const itemRequest = requestContainer.querySelector(`#request-item`);

  const renderStepThree = (item) => {
    requestContainer.style.display = `block`;

    target.textContent = item.title;
    sumTitle.textContent = item.names.fieldFullSum;
    years.textContent = item.offer.years;
    sum.textContent = item.offer.sum;

    if (!item.offer.payment) {
      itemRequest.style.display = `none`;
      return;
    }

    itemRequest.style.display = `flex`;
    payment.textContent = item.offer.payment;
  };

  window.stepThree = {
    renderStepThree
  };
})();
