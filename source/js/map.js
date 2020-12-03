'use strict';

(function () {
  const TABLET_BREAKPOINT = 768;
  const KeyButton = {
    ENTER: 13,
    ENTER_NAME: `Enter`
  };

  let locationMark = {
    icon: `img/location.png`,
    size: [35, 40],
    offset: [-17, -40]
  };

  if (document.documentElement.clientWidth < TABLET_BREAKPOINT) {
    locationMark.icon = `img/location-phone.png`;
    locationMark.size = [27, 33];
    locationMark.offset = [-14, -33];
  }

  const cities = window.mocks.cities;

  setTimeout(() => {
    const elem = document.createElement(`script`);
    elem.src = `https://api-maps.yandex.ru/2.1/?apikey=bcbda5be-152e-4e0e-962c-8eb3b84f36b6&lang=ru_RU&&load=package.map`;
    document.querySelector(`#popup-login`).after(elem);
  }, 2000);

  setTimeout(() => {


    const ymaps = window.ymaps;

    const mapBlock = document.querySelector(`#branches`);

    if (!mapBlock) {
      return;
    }

    ymaps.ready(init);

    const checkContainer = mapBlock.querySelector(`.branches__check`);
    const checkboxes = checkContainer.querySelectorAll(`label span`);

    const mapContainer = mapBlock.querySelector(`#map`);


    const onCheckboxKeydown = (e) => {
      if (e.keyCode === KeyButton.ENTER || e.key === KeyButton.ENTER_NAME) {
        e.target.parentElement.control.click();
      }
    };

    function init() {

      const marks = cities.map((city) => {
        return new ymaps.Placemark([city.coords, city.coords2], {}, {
          iconLayout: `default#image`,
          iconImageHref: locationMark.icon,
          iconImageSize: locationMark.size,
          iconImageOffset: locationMark.offset
        });
      });

      const myMap = new ymaps.Map(mapContainer, {
        center: [55.76, 37.64],
        zoom: 4,
        controls: []
      });

      myMap.controls.add(`zoomControl`, {
        size: `small`,
        position: {
          left: `auto`,
          right: 10,
          bottom: 195,
          top: `auto`
        }
      });

<<<<<<< HEAD
      for (const mark of marks) {
        myMap.geoObjects.remove(mark);
      }

      for (let i = 0; i < cities.length; i++) {
        for (const checkbox of boxesChecked) {
          if (checkbox.value === cities[i].title) {
            myMap.geoObjects.add(marks[i]);
=======
      myMap.controls.add(`geolocationControl`, {
        position: {
          left: `auto`,
          right: 10,
          bottom: 150,
          top: `auto`
        }
      });

      myMap.behaviors.disable(`scrollZoom`);

      const onCheckboxesChange = () => {
        const boxesChecked = checkContainer.querySelectorAll(`.branches__check input[type='checkbox']:checked`);

        for (const [i, city] of cities.entries()) {
          myMap.geoObjects.remove(marks[i]);
          for (const checkbox of boxesChecked) {
            if (checkbox.value === city.title) {
              myMap.geoObjects.add(marks[i]);
            }
>>>>>>> second
          }
        }
      };

      checkContainer.addEventListener(`change`, onCheckboxesChange);

      for (const box of checkboxes) {
        box.addEventListener(`keydown`, onCheckboxKeydown);
      }
    }
  }, 3000);

})();
