"use strict";

(() => {
   // Hero Slider
   const heroPicts = document.querySelectorAll(".hero__picture");
   const heroBtnNext = document.querySelector(
      '.hero__btn[data-direction="next"]'
   );
   const heroBtnPrevious = document.querySelector(
      '.hero__btn[data-direction="previous"]'
   );

   let pictIsShown;

   heroBtnNext.addEventListener("click", nextPict);
   heroBtnPrevious.addEventListener("click", prevPict);
   setInterval(nextPict, 5000);

   function nextPict() {
      for (let i = 0; i < heroPicts.length; i++) {
         if (heroPicts[i].classList.contains("hero__picture--is-shown")) {
            pictIsShown = i;
         }
      }

      heroPicts[pictIsShown].classList.remove("hero__picture--is-shown");
      pictIsShown++;

      if (pictIsShown > heroPicts.length - 1) {
         pictIsShown = 0;
      } else if (pictIsShown < 0) {
         pictIsShown = heroPicts.length - 1;
      }

      heroPicts[pictIsShown].classList.add("hero__picture--is-shown");
   }

   function prevPict() {
      for (let i = 0; i < heroPicts.length; i++) {
         if (heroPicts[i].classList.contains("hero__picture--is-shown")) {
            pictIsShown = i;
         }
      }

      heroPicts[pictIsShown].classList.remove("hero__picture--is-shown");
      pictIsShown--;

      if (pictIsShown > heroPicts.length - 1) {
         pictIsShown = 0;
      } else if (pictIsShown < 0) {
         pictIsShown = heroPicts.length - 1;
      }

      heroPicts[pictIsShown].classList.add("hero__picture--is-shown");
   }

   // Slider-2
   let slider2 = document.querySelector(".slider-2__picts");
   //  let { left: slider2Pos } = document
   //     .querySelector(".slider-2__picts")
   //     .getBoundingClientRect();
   const slider2Length =
      document.querySelectorAll(".slider-2__picture").length - 1;

   let i = 0;
   let offset = 294;

   if (++i < slider2Length) {
      setInterval(function () {
         slider2.style.transform = `translateX(-${offset}px)`;
      }, 1000);

      offset += 294;
      slider2.style = "";
   }
})();
