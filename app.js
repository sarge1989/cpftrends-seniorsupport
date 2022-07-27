gsap.registerPlugin(ScrollTrigger);

//to toggle off and on the scroll markers
// ScrollTrigger.defaults({
//     markers: true
// });

let loader = document.querySelector('.loader');
let html = document.querySelector('html');

//loading screen with a 0.25 seconds delay after for first animation to not look laggy
window.addEventListener("load", () => {
  loader.style.display = "none";
  html.style.overflowY = "visible";
  setTimeout(() => {
    const titlePage = lottie.loadAnimation({
      container: document.querySelector(".government-cover-1"), // the dom element that will contain the animation
      renderer: 'svg',
      loop: 0,
      autoplay: true,
      path: "./animations/01_Cover.json", // the path to the animation json
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    });
    titlePage.setSpeed(0.8); //1 is the current speed;
  }, 250);
});


/////LOTTIE ANIMATION FUNC
const ScrollLottie = (obj) => { //https://github.com/chrisgannon/ScrollLottie

    let anim = lottie.loadAnimation({ //https://github.com/airbnb/lottie-web/wiki/loadAnimation-options
     container: document.querySelector(obj.target), 
     renderer: 'svg',
     loop: false,
     autoplay: false,
     path: obj.path,
     rendererSettings: { //https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
        preserveAspectRatio: obj.aspectRatio} //keep aspect ratio of svg
   });
   
   let timeObj = {currentFrame: 0}
   ScrollTrigger.create({ //https://greensock.com/docs/v3/Plugins/ScrollTrigger
     trigger: obj.target,
       scrub: true,
       pin: obj.pin,
       start: obj.start,
       end: obj.end, 
       onUpdate: self => {
        if(obj.duration) {
         gsap.to(timeObj, {
          duration: obj.duration,
          currentFrame:(Math.floor(self.progress *  obj.totalFrames) + obj.startingFrame),
          onUpdate: () => {
           anim.goToAndStop(timeObj.currentFrame, true)
          },
          ease: 'power1.out'
         })
        } else {
          anim.goToAndStop(self.progress *  obj.totalFrames +obj.startingFrame , true)
        }
       }
   });  
  
  }


//02_Gov
ScrollLottie({
    target: ".government-2", //the division the lottie animation will be in
    path: "./animations/02_Gov.json", //downloaded json file
    duration: 1, //adds smooth scrolling, can set any number
    end: "+=1200%", //how many percent of the viewheight a user has to scroll to finish the animation
    totalFrames: 708, //get this from the website. essentially the total frames for the whole animation
    start: "top 99%", //where trigger starts
    pin: false,
    startingFrame: 15, //usually 0, unless we want animation to start from a later frame in this case
    aspectRatio : 'xMidYMin meet' //toggle svg aspect ratio setting
});

//trigger for div to be pinned, has to be seperated from above ScrollLottie function as I want the animation to play at a different instance compared to when i want to pin it...
ScrollTrigger.create({
  trigger: ".government-2",
  start: "top top",
  end: "1000%",
  pin: true,
});


//03_Gov
ScrollLottie({
  target: ".government-3",
  path: "./animations/03_Gov.json",
  duration: 1,
  end: "+=650%",
  totalFrames: 270,
  start: "top 85%",
  pin: false,
  startingFrame: 0,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".government-3",
  start: "top top",
  end: "490%",
  pin: true,
});

//04_Cover
ScrollLottie({
  target: ".loved-ones-cover-4",
  path: "./animations/04_Cover.json",
  duration: 1,
  end: "+=300%",
  totalFrames: 82,
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMid slice'
});

//05_LovedOnes
ScrollLottie({
  target: ".loved-ones-5",
  path: "./animations/05_LovedOnes.json",
  duration: 1,
  end: "+=1600%",
  totalFrames: 782,
  start: "top 90%",
  pin: false,
  startingFrame: 20,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".loved-ones-5",
  start: "top top",
  end: "1430%",
  pin: true,
});

//06_LovedOnes
ScrollLottie({
  target: ".loved-ones-6",
  path: "./animations/06_LovedOnes.json",
  duration: 1,
  end: "+=600%",
  totalFrames: 142,
  start: "top 85%",
  pin: false,
  startingFrame: 0,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".loved-ones-6",
  start: "top top",
  end: "430%",
  pin: true,
});


//07_Cover
ScrollLottie({
  target: ".gov-loved-ones-cover-7",
  path: "./animations/07_Cover.json",
  duration: 1,
  end: "+=300%",
  totalFrames: 82,
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMid slice'
});

//08_GovLovedOnes
ScrollLottie({
  target: ".gov-loved-ones-8",
  path: "./animations/08_GovLovedOnes.json",
  duration: 1,
  end: "+=900%",
  totalFrames: 437,
  start: "top 99%",
  pin: false,
  startingFrame: 15,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".gov-loved-ones-8",
  start: "top top",
  end: "720%",
  pin: true,
});

//09_Cover
ScrollLottie({
  target: ".ending-9",
  path: "./animations/09_Cover.json",
  duration: 1,
  end: "+=350%",
  totalFrames: 81,
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMin slice'
});