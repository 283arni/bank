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

  class Popup {
    constructor(popup) {
      this.popup = popup;
      this.body = document.querySelector(`body`);
      this.loginPopup = this.popup.querySelector(`.login__wrapper`);
      this.thanksPopup = this.popup.querySelector(`.thanks__wrapper`);
      this.login = this.popup.querySelector(`#login-field`);
      this.password = this.popup.querySelector(`#password-field`);
      this.loginButton = this.popup.querySelector(`#login-button`);
      this.passwordButton = this.popup.querySelector(`#password-button`);
      this.closeButton = this.popup.querySelector(`.close`);

      this.onClosePopupClick = this.onClosePopupClick.bind(this);
      this.onButtonKeydown = this.onButtonKeydown.bind(this);
      this.onClosePopupKeydown = this.onClosePopupKeydown.bind(this);
      this.onPasswordButtonMousedown = this.onPasswordButtonMousedown.bind(this);
      this.onPasswordButtonMouseup = this.onPasswordButtonMouseup.bind(this);
      this.onSubmitButtonKeydown = this.onSubmitButtonKeydown.bind(this);
    }

    openPopup() {
      this.body.classList.add(`active-popup`);
      this.body.append(this.popup);

      this.closeButton.addEventListener(`click`, this.onClosePopupClick);
      document.addEventListener(`keydown`, this.onClosePopupKeydown);

      if (this.loginPopup) {
        this.login.focus();
        this.loginButton.addEventListener(`keydown`, this.onButtonKeydown);
        this.loginButton.addEventListener(`click`, this.onSubmitButtonKeydown);
        this.passwordButton.addEventListener(`mousedown`, this.onPasswordButtonMousedown);
        this.passwordButton.addEventListener(`mouseup`, this.onPasswordButtonMouseup);
        return;
      }

      this.closeButton.addEventListener(`keydown`, this.onButtonKeydown);
      this.closeButton.focus();
    }

    closePopup() {
      this.body.classList.remove(`active-popup`);
      this.closeButton.removeEventListener(`click`, this.onClosePopupClick);
      document.removeEventListener(`keydown`, this.onClosePopupKeydown);

      if (this.loginPopup) {
        this.loginButton.removeEventListener(`keydown`, this.onButtonKeydown);
        this.loginButton.removeEventListener(`click`, this.onSubmitButtonKeydown);
        this.passwordButton.removeEventListener(`mousedown`, this.onPasswordButtonMousedown);
        this.passwordButton.removeEventListener(`mouseup`, this.onPasswordButtonMouseup);
        return;
      }

      this.closeButton.removeEventListener(`keydown`, this.onButtonKeydown);
    }

    onButtonKeydown(e) {
      e.preventDefault();

      if (e.keyCode === KeyButton.TAB || e.key === KeyButton.TAB_NAME) {
        this.closeButton.focus();
      }

      if (e.keyCode === KeyButton.ENTER || e.key === KeyButton.ENTER_NAME) {
        this.closeButton.click();
      }
    }

    onClosePopupKeydown(e) {
      if (e.keyCode === KeyButton.ESC || e.key === KeyButton.ESC_NAME) {
        this.popup.remove();
        this.closePopup();
      }
    }

    onClosePopupClick() {
      this.popup.remove();
      this.closePopup();
    }

    onPasswordButtonMousedown() {
      this.password.setAttribute(`type`, `text`);
    }

    onPasswordButtonMouseup() {
      this.password.setAttribute(`type`, `password`);
    }

    onSubmitButtonKeydown() {
      const user = {
        login: this.login.value,
        password: this.password.value
      };

      localStorage.setItem(`user`, JSON.stringify(user));
    }
  }

  window.Popup = Popup;
})();
