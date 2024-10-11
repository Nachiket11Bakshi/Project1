const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
/* works only when we do not give height and width to the main rapper*/

var elemc=document.querySelector("#elem-container");
var e=document.querySelector("#fixed-image");
elemc.addEventListener("mouseenter",function(){
    e.style.display="block";
})
elemc.addEventListener("mouseleave",function(){
    e.style.display="none";
})

var elems=document.querySelectorAll(".elem");
elems.forEach(function(el){
    el.addEventListener("mouseenter",function(){
        var image=el.getAttribute("data-image");
        e.style.backgroundImage=`url(${image})` 
    })

});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var loader=document.querySelector("#loader");


  setTimeout(function(){
    loader.style.top="-100%";

  },4200);