/*
* ----------------
* Importing styles
* ----------------
*/
import './assets/sass/reset.scss'
import './assets/sass/app.scss'
/*
* ----------------
* Importing JS
* ----------------
*/
import Lenis from '@studio-freight/lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
/*
* --------------------
* Your javascript here
* --------------------
*/
// console.log("Js works here !")
// smooth scroll Lenis locomotive scroll alternative !
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  direction: 'vertical', // vertical, horizontal
  gestureDirection: 'vertical', // vertical, horizontal, both
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
})

//get scroll value check if work in console
// lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
//   console.log({ scroll, limit, velocity, direction, progress })
// })

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

// gsap intro anim 
const TLINTRO = gsap.timeline({
    default: {
      duration: 0,
      ease: 'sine'
    }
})

TLINTRO
    .to('.title', { y: 0, duration: 0.3, delay: .3})
    .to('.link', { x: 0, duration: 0.3, delay: .5},'-=0.4')
    .to('.text', { autoAlpha: 1, duration: 0.5, delay: .5}, '-=0.3')
// ---

// gsap ScrollTrigger 
// console.log(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger)

// const TLScroll = gsap.timeline({scrollTrigger:{
//   trigger:".section-image",
//   yPercent: -50,
//   scrub: true,
//   pin: false,
//   start:"top center",
//   end:"+=100%",
//   markers:true
// }});


// parallax image test
gsap.to('.img', {
  yPercent: -10,
  ease: 'none',
  scrollTrigger: {
    trigger:'.section-image',
    start:'top bottom',
    end:'bottom top',
    scrub: 0.3,
    // markers:true
  }
})
// -----
// for smooth anchors with Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    lenis.scrollTo(this.getAttribute('href'))
  });
})