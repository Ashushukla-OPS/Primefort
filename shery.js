


 const scrollContainer = document.querySelector(".mainnn");

 const locoScroll = new LocomotiveScroll({
   el: scrollContainer,
   smooth: true, // smooth scrolling ON
   multiplier: 0.5, // scroll speed
   class: "is-reveal",
   lerp:0.04,
 });
 // Optional: update on window resize
    window.addEventListener('resize', () => locoScroll.update());


  ///
  ////







window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (!loader) return;

  // Fade out loader after 3 seconds (matches progress bar duration)
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 3000);

  loader.addEventListener("transitionend", () => {
    loader.remove();
  });
});

const header = document.querySelector(".headcontainer");

window.addEventListener("scroll", () => {
  if (window.scrollY > window.innerHeight) {
    // after first section
    console.log(window.scrollY, window.innerHeight);

    header.style.display = "none"; // hide header permanently
  }
  else if (window.scrollY < window.innerHeight)
    {
    // header.style.display = "initial"; // hide header permanently
    header.style.display = "flex"
   
  }
});


Shery.mouseFollower();
Shery.makeMagnet("#icon", {
  power: 0.5,
  scale: 1.1,
  smoothing: 0.2,
});

Shery.imageEffect(".img-container", {
  gooey: true,
  config: {
    brightness: 1.2,

    contrast: 1.1,
  },
});

const follower = document.querySelector("#shery-mouse-follower");
const cards = document.querySelectorAll(".service-box");

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    follower.style.opacity = "1";
    follower.style.transform = "scale(1)";
  });

  card.addEventListener("mouseleave", () => {
    follower.style.opacity = "0";
    follower.style.transform = "scale(0)";
  });
});
Shery.imageEffect(".middle-image", {
  style: 5,
  debug: false,
  config: {
    intensity: 0.4,
    mouseEase: 0.1,
    noiseScale: 20,
    strength: 0.35,
  },
});

// // Initialize Lenis
// const lenis = new Lenis({
//   wrapper:document.querySelector("body"),
//   duration:2,
//   lerp:0.06
// });

// // Use requestAnimationFrame to continuously update the scroll
// function raf(time) {
//   lenis.raf(time);
//   requestAnimationFrame(raf);
// }

// requestAnimationFrame(raf);



