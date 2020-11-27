'use strict';

(function () {
  const loginButton = document.querySelector(`#login`);
  const templateLogin = document.querySelector(`#popup-login`).content;


  if (!templateLogin || !loginButton) {
    return;
  }

  const cloneLogin = templateLogin.querySelector(`.login`).cloneNode(true);
  const Popup = window.Popup;
  const popupLogin = new Popup(cloneLogin);

  loginButton.addEventListener(`click`, () => {
    popupLogin.openPopup();
  });
})();
