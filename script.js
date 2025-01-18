// MAIN
function nftBlink(){
  gsap.from(".main span",{
    opacity:0,
    dealy:1,
    duration:1,
    repeat:2,
    ease:"bounce.inOut",
    // scrollTrigger:{
    //   trigger:".main span",
    //   scroller:"body",
    //   start:"top",
    //   end:"bottom",
    //   toggleActions:"restart",
    // }    
  })
}
nftBlink()


// SIDENAV 
function sideNav(){
  
  let menu = document.querySelector(".sec3 svg")
  let close = document.querySelector(".close")
  
  let tl = gsap.timeline()
  
  tl.to(".sidenav",{
    right:"0",
    duration:0.5,
    delay:0.2
  })
  
  tl.from(".mixture",{
    x:150,
    opacity:0,
    duration:0.5,
    delay:0.1,
    stagger:0.3
  })
  
  tl.from(".top, .bottom h2",{
    y:-60,
    opacity:0,
    duration:0.5,
  })
  
  // tl.from(".bottom h2",{
    //     y:-60,
    //     opacity:0,
    //     duration:0.5,
    //     delay:0.1 
    // })
    
    tl.from(".text",{
      y:-60,
      opacity:0,
      duration:0.5,
      stagger:0.1
    })
    
    
    tl.pause()
    
    menu.addEventListener("click",function(){
      tl.play()
      document.body.style.overflow = "hidden"
      
    })
    
    close.addEventListener("click",function(){
      tl.reverse()
      document.body.style.overflowX = "hidden"
      document.body.style.overflowY = "auto"
    })
    
  }
sideNav()


// SIDENAV MARQUEE
function marquee(){

  gsap.to(".marque",{
      transform:"translateY(-100%)",
      repeat:-1,
      duration:15,
      ease:"none"
  })
  }
marquee()


// MAIN 06
function blinking(){
  gsap.from(".main6 h4",{
      y:200,
      height:0,
      borderRadius:"50%",
      duration:2.5,
      delay:3,
      ease:"power3.inOut",
      repeat:-1,
      yoyo:true,
      // scrollTrigger:{
      //     trigger:".main6 h4",
      //     start:"top 50%",
      // }
  })
  }
blinking()


// MAIN 08
function mttMouseMovement(){

let cursor = document.querySelector(".imaget1");
let main = document.querySelector(".teamContainer1");
let mouseMove = document.querySelector(".team1");

main.addEventListener("mousemove", function(dets) {
  gsap.to(cursor, {
    x: dets.x,
    opacity: 1,
    ease: "back.out",
    duration: 2
  });
});

mouseMove.addEventListener("mouseenter", function(dets) {
  gsap.to(cursor, {
    opacity: 1
  });
});

mouseMove.addEventListener("mouseleave", function(dets) {
    gsap.to(cursor, {
      opacity: 0,
      ease: "back.out",
      duration: 2
    });
});

let cursor2 = document.querySelector(".imaget2");
let main2 = document.querySelector(".teamContainer2");
let mouseMove2 = document.querySelector(".team2");

main2.addEventListener("mousemove", function(dets) {
  gsap.to(cursor2, {
    x: dets.x,
    opacity: 1,
    ease: "back.out",
    duration: 2
  });
});

mouseMove2.addEventListener("mouseenter", function(dets) {
  gsap.to(cursor2, {
    opacity: 1
  });
});

mouseMove2.addEventListener("mouseleave", function(dets) {
    gsap.to(cursor2, {
      opacity: 0,
      ease: "back.out",
      duration: 2
    });
});
}
mttMouseMovement()


// MAIN 12
function moveEffect(){
  
  gsap.to(".moveEffect1",{
    transform:"translateX(-100%)",
    duration:5,
    repeat:-1,
    ease:"linear"
  })
  
  gsap.to(".moveEffect2",{
    transform:"translateX(-100%)",
    duration:5,
    repeat:-1,
    ease:"linear"
  })
  
  gsap.to(".moveEffect3",{
    transform:"translateX(-100%)",
    duration:5,
    repeat:-1,
    ease:"linear"
  })
  
}
moveEffect()

// Initialize Lenis
const lenis = new Lenis();
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
