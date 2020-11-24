'use strict';

(function () {
  const Year = {
    ONE: 1,
    FIVE: 5
  };

  const Divider = {
    AFTER_THREE: 3,
    AFTER_SIX: 6
  };

  const returnClearValue = (sum) => {
    return parseInt(sum.split(` `).join(``), 10).toString();
  };

  const transformYears = (year) => {
    if (!year) {
      return ``;
    }

    year = returnClearValue(year);

    if (+year === Year.ONE) {
      return `${year} год`;
    }

    if (+year > Year.ONE && +year < Year.FIVE) {
      return `${year} года`;
    }

    return `${year} лет`;
  };

  const transformValue = (sum) => {

    if (!sum) {
      return ``;
    }

    sum = returnClearValue(sum);

    if (sum.length <= Divider.AFTER_SIX && sum.length > Divider.AFTER_THREE) {
      return `${sum.substring(sum.length - Divider.AFTER_THREE, 0)} ${sum.substring(sum.length - Divider.AFTER_THREE)} рублей`;
    }

    if (sum.length > Divider.AFTER_SIX) {
      return `${sum.substring(sum.length - Divider.AFTER_SIX, 0)} ${sum.substring(sum.length - Divider.AFTER_THREE, sum.length - Divider.AFTER_SIX)} ${sum.substring(sum.length - Divider.AFTER_THREE)} рублей`;
    }

    return `${sum} рублей`;
  };

  window.utils = {
    returnClearValue,
    transformValue,
    transformYears
  };
})();
