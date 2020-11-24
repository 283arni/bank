'use strict';

(function () {
  const KeyButton = {
    ESC: 27,
    ESC_NAME: `Escape`,
    ENTER: 13,
    ENTER_NAME: `Enter`,
    TAB: 9,
    TAB_NAME: `Tab`
  };

  const body = document.querySelector(`body`);
  const templateThanks = document.querySelector(`#popup-thanks`).content;
  const cloneThanks = templateThanks.querySelector(`.thanks`).cloneNode(true);

  const renderPopupThanks = () => {

    body.classList.add(`active-popup`);
    body.append(cloneThanks);

    const popup = document.querySelector(`.thanks`);
    const closeButton = popup.querySelector(`.thanks__close button`);

    const closePopup = () => {
      body.classList.remove(`active-popup`);
      closeButton.removeEventListener(`click`, onClosePopupClick);
      closeButton.removeEventListener(`keydown`, onButtonKeydown);
      document.removeEventListener(`keydown`, onClosePopupKeydown);
    };

    const onButtonKeydown = (e) => {
      e.preventDefault();

      if (e.keyCode === KeyButton.TAB || e.key === KeyButton.TAB_NAME) {
        closeButton.focus();
      }

      if (e.keyCode === KeyButton.ENTER || e.key === KeyButton.ENTER_NAME) {
        closeButton.click();
      }
    };

    const onClosePopupKeydown = (e) => {
      if (e.keyCode === KeyButton.ESC || e.key === KeyButton.ESC_NAME) {
        cloneThanks.remove();
        closePopup();
      }
    };

    const onClosePopupClick = () => {
      cloneThanks.remove();
      closePopup();
    };

    closeButton.addEventListener(`click`, onClosePopupClick);
    closeButton.addEventListener(`keydown`, onButtonKeydown);
    document.addEventListener(`keydown`, onClosePopupKeydown);
    closeButton.focus();
  };

  window.popupThanks = {
    renderPopupThanks
  };
})();
