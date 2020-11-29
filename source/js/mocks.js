"use strict";

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

  const cities = [
    {
      title: `russia`,
      coords: 55.755814,
      coords2: 37.617635,
    },
    {
      title: `russia`,
      coords: 59.938951,
      coords2: 30.315635,
    },
    {
      title: `russia`,
      coords: 51.533557,
      coords2: 46.034257,
    },
    {
      title: `russia`,
      coords: 58.603591,
      coords2: 49.668014,
    },
    {
      title: `russia`,
      coords: 57.153033,
      coords2: 65.534328,
    },
    {
      title: `russia`,
      coords: 54.989342,
      coords2: 73.368212,
    },
    {
      title: `sng`,
      coords: 40.372967,
      coords2: 49.853139,
    },
    {
      title: `sng`,
      coords: 41.311151,
      coords2: 69.279737,
    },
    {
      title: `sng`,
      coords: 53.902284,
      coords2: 27.561831,
    },
    {
      title: `sng`,
      coords: 43.237156,
      coords2: 76.945618,
    },
    {
      title: `europe`,
      coords: 48.856663,
      coords2: 2.351556,
    },
    {
      title: `europe`,
      coords: 50.080293,
      coords2: 14.428983,
    },
    {
      title: `europe`,
      coords: 51.507351,
      coords2: -0.127660,
    },
    {
      title: `europe`,
      coords: 41.902689,
      coords2: 12.496176,
    }
  ];

  window.mocks = {
    targets,
    cities
  };
})();
