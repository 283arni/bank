'use strict';

(function () {

  const returnClearValue = (sum) => {
    return parseInt(sum.split(` `).join(``), 10).toString();
  };

  const transformYears = (year) => {
    if (!year) {
      return ``;
    }

    year = returnClearValue(year);

    if (+year === 1) {
      return `${year} год`;
    }

    if (+year > 1 && +year < 5) {
      return `${year} года`;
    }

    return `${year} лет`;
  };

  const transformValue = (sum) => {

    if (!sum) {
      return ``;
    }

    sum = returnClearValue(sum);

    if (sum.length <= 6 && sum.length > 3) {
      return `${sum.substring(sum.length - 3, 0)} ${sum.substring(sum.length - 3)} рублей`;
    }

    if (sum.length > 6) {
      return `${sum.substring(sum.length - 6, 0)} ${sum.substring(sum.length - 3, sum.length - 6)} ${sum.substring(sum.length - 3)} рублей`;
    }

    return `${sum} рублей`;
  };

  window.utils = {
    returnClearValue,
    transformValue,
    transformYears
  };
})();
