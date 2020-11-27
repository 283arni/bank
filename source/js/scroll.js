'use strict';

(function () {
  const links = document.querySelectorAll(`[href^='#']`);
  const speed = 0.5;

  for (const iter of links) {
    iter.addEventListener(`click`, (e) => {
      e.preventDefault();

      if (iter.getAttribute(`href`) === `#`) {
        return;
      }

      const anchor = document.querySelector(iter.getAttribute(`href`));
      const coordinateAnchor = anchor.getBoundingClientRect().top;
      const pageOffset = window.pageYOffset;

      let start = null;

      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start;

        let coordinate =
          coordinateAnchor < 0
            ? Math.max(pageOffset - progress / speed, pageOffset + coordinateAnchor)
            : Math.min(pageOffset + progress / speed, pageOffset + coordinateAnchor);

        window.scrollTo(0, coordinate);
        if (coordinate !== pageOffset + coordinateAnchor) {
          requestAnimationFrame(step);
        }
      }
    });
  }
})();
