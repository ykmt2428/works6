
   'use strict';
   {
   const hamburger = document.querySelector('.hamburger');
   const mask = document.getElementById('mask');
   const header = document.getElementById('header');
   const close = document.querySelector('.close');
   const side = document.querySelector('.sides');
   const images = document.querySelectorAll('.Images');
   let currentIndex = 0;
   let dotsIndex = 0;
   const dots = document.querySelectorAll('.dots span');

   hamburger.addEventListener('click',()=> {
      header.classList.add('open');
   });
   close.addEventListener('click',()=> {
      header.classList.remove('open');
   });
   mask.addEventListener('click',()=> {
      header.classList.remove('open');
   });
   side.addEventListener('click',()=> {
      header.classList.remove('open');
   });

   function play () {
      setTimeout(() => {
         images[currentIndex].classList.remove('currentImage');
         currentIndex++;
         if(currentIndex > images.length -1) {
            currentIndex = 0;
         }
         images[currentIndex].classList.add('currentImage');
         play();
      },5000)
   }
   

   function dot () {
      setTimeout(() => {
         dots[dotsIndex].classList.remove('current-btn');
         dotsIndex++;
         if(dotsIndex > dots.length -1) {
            dotsIndex = 0;
         }
         dots[dotsIndex].classList.add('current-btn');
         dot();
      },5000);
   }
   function callback (entries) {
      entries.forEach(entry => {
         if(!entry.isIntersecting) {
            header.classList.add('scroll');
         } else {
            header.classList.remove('scroll');
         }
      });
   }

   const observer = new IntersectionObserver(callback);
   observer.observe(document.getElementById('area'));

   const toTop = document.getElementById('toTop');
   toTop.addEventListener('click',(e)=> {
      e.preventDefault();
      
      window.scrollTo({
         top: 0,
         behavior: "smooth",
      });
   });
   play();
   dot();

}