'use strict';

(function () {
  const KeyButton = {
    ENTER: 13,
    ENTER_NAME: `Enter`,

  };
  const Swiper = window.Swiper;

  if (!Swiper) {
    return;
  }


  const servicesLabels = document.querySelectorAll(`.services__wrapper label`);

  for (const label of servicesLabels) {
    label.addEventListener(`keydown`, (e) => {
      if (e.keyCode === KeyButton.ENTER || e.key === KeyButton.ENTER_NAME) {
        label.click();
      }
    });
  }

  const slider = document.querySelector(`.slider`);
  let swiperTabs;

  const swiper = new Swiper(slider, {
    loop: true,
    autoplay: {
      delay: 4000
    },
    pagination: {
      el: `.slider__pagination`
    },
    breakpoints: {
      1024: {
        noSwiping: true,
        noSwipingClass: `slider`,
        pagination: {
          clickable: true,
        },
      }
    }
  });

  if (document.documentElement.clientWidth < 1024) {
    const services = document.querySelector(`.services__wrapper form`);
    const wrapper = services.querySelector(`form > ul`);
    const items = services.querySelectorAll(`form > ul li`);

    services.classList.add(`swiper-container`);
    wrapper.classList.add(`swiper-wrapper`);

    for (const item of items) {
      item.classList.add(`swiper-slide`);
    }

    swiperTabs = new Swiper(services, {
      breakpoints: {
        280: {
          loop: true,
          pagination: {
            el: `.services__pagination`
          },
        },
        1024: {
          loop: false,
          noSwiping: true,
          noSwipingClass: `swiper-container`,
        }
      }
    });
  }

  window.slider = {
    swiperTabs,
    swiper
  };
})();
