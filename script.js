// Locomotive Script
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

// Swiper Js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Selecting elements
const elemContainer = document.querySelector('.elem-container');
const fixedImg = document.querySelector('.fixed-image');
const elem = document.querySelectorAll('.elem')

elemContainer.addEventListener('mouseover',function(){
    fixedImg.style.display='block'
})
elemContainer.addEventListener('mouseleave',function(){
    fixedImg.style.display='none'
})

elem.forEach(function(e){
    e.addEventListener('mouseenter',function(){
       const img = e.getAttribute('data-img')
       fixedImg.style.backgroundImage = `url(${img})`
    });

    ;
});

