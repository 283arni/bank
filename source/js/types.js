'use strict';

(function () {
  const targets = {
    house: {
      title: `Ипотека`,
      names: {
        fieldFullSum: `Стоимость недвижимости`,
        fieldSum: `Сумма ипотеки`,
        lessSum: `ипотечные кредиты`
      },
      limits: {
        min: `1 200 000`,
        max: `25 000 000`
      },
      minSum: 500000,
      step: 100000,
      percent: 10,
      years: {
        from: `5`,
        to: `30`
      },
      offer: {
        sum: ``,
        years: ``,
        payment: ``,
      }
    },
    car: {
      title: `Автокредит`,
      names: {
        fieldFullSum: `Стоимость автомобиля`,
        fieldSum: `Сумма автокредита`,
        lessSum: `автокредиты`
      },
      limits: {
        min: `500 000`,
        max: `5 000 000`
      },
      percent: 20,
      minSum: 200000,
      step: 50000,
      years: {
        from: `1`,
        to: `5`
      },
      offer: {
        sum: ``,
        years: ``,
        payment: ``,
      }
    },
    credit: {
      title: `Потребительский кредит`,
      names: {
        fieldFullSum: `Сумма потребительского кредита`,
        fieldSum: `Сумма кредита`
      },
      limits: {
        min: `50 000`,
        max: `3 000 000`
      },
      percent: 0,
      step: 50000,
      years: {
        from: `1`,
        to: `7`
      },
      offer: {
        sum: ``,
        years: ``,
        payment: `0 рублей`,
      }
    }
  };

  window.types = {
    targets
  };
})();
