const mobile_nav = document.querySelector(".navbar-icon-btn");
const nav_header = document.querySelector(".navbar");

const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());


//navbar scroll

let navbar=document.querySelector(".navbar");
let topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", function(){
  if(scrollY>=200){
    navbar.classList.add("active1");
    topBtn.classList.add("active-btn-top");
  }
  else{
    navbar.classList.remove("active1");
    topBtn.classList.remove("active-btn-top");
  }
});

// scroll down icon

let scrollDownIcon=document.querySelector(".home-section-right i");

window.addEventListener("scroll", function(){
  if(scrollY>=200){
    scrollDownIcon.style.display="none";
  }
  else{
    scrollDownIcon.style.display="inline-block";
  }
});



//swiper code
// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 3,
//   spaceBetween: 20,
//   loop:true,
//   autoplay:{
//     delay:3000,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

//media query
//swiper code
function myFunction(x) {
  if (x.matches) { // If media query matches
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      loop:true,
      autoplay:{
        delay:3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop:true,
      autoplay:{
        delay:3000,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
}

var x = window.matchMedia("(max-width: 1250px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes