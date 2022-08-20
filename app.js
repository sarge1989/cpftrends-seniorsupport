gsap.registerPlugin(ScrollTrigger);

//to toggle off and on the scroll markers
// ScrollTrigger.defaults({
//     markers: true
// });

let loader = document.querySelector('.loader');
let html = document.querySelector('html');

//playing different lottie animations based on aspect ratio
let s = window.innerWidth < window.innerHeight ? "_m" : "_d"

//loading screen with a 0.25 seconds delay after for first animation to not look laggy
window.addEventListener("load", () => {
  loader.style.display = "none";
  html.style.overflowY = "visible";
  setTimeout(() => {
    const titlePage = lottie.loadAnimation({
      container: document.querySelector(".government-cover-1"), // the dom element that will contain the animation
      renderer: 'svg',
      loop: 0,
      autoplay: true, //it is true here as the designers want the first animation to be auto played
      path: `./animations/01_Cover${s}.json`, // the path to the animation json
      rendererSettings: {
        preserveAspectRatio: 'xMidYMax slice',
      }
    });
    titlePage.setSpeed(0.8); //1 is the current speed;
  }, 250);
});


/////LOTTIE ANIMATION FUNC
const ScrollLottie = (obj) => { //https://github.com/chrisgannon/ScrollLottie

    let anim = lottie.loadAnimation({ //https://github.com/airbnb/lottie-web/wiki/loadAnimation-options
     container: document.querySelector(obj.target), //div to place the animation in 
     renderer: 'svg', //render the json file as an svg
     loop: false,
     autoplay: false,
     path: obj.path, // the json file path
     rendererSettings: { //https://github.com/airbnb/lottie-web/wiki/Renderer-Settings
        preserveAspectRatio: obj.aspectRatio, //keep aspect ratio of svg
    } 
   });
   
   let timeObj = {currentFrame: 0}
   ScrollTrigger.create({ //https://greensock.com/docs/v3/Plugins/ScrollTrigger
     trigger: obj.target,
       scrub: true,
       pin: obj.pin,
       start: obj.start,
       end: obj.end, 
       onUpdate: self => { //whenever the user scrolls, the code calculates which lottie frame to show
        if(obj.duration) {
         gsap.to(timeObj, {
          duration: obj.duration,
          currentFrame:(Math.floor(self.progress *  (anim.totalFrames - 1)) + obj.startingFrame),
          onUpdate: () => {
           anim.goToAndStop(timeObj.currentFrame, true)
          },
          ease: 'power0.out'
         })
        } else {
          anim.goToAndStop(self.progress *  ((anim.totalFrames - 1) +obj.startingFrame) , true)
        }
       }
   });  
  }

//02_Gov
ScrollLottie({
    target: ".government-2", //the division the lottie animation will be in
    path: `./animations/02_Gov${s}.json`, //downloaded json file
    duration: s == "_d" ? 1 : 0.6, //adds smooth scrolling, can set any number
    end: s == "_d" ? "+=1200%" : "+=380%", //how many percent of the viewheight a user has to scroll to finish the animation
    // totalFrames: 708, //get this from the website. essentially the total frames for the whole animation (if want to set this can change anim.totalFrames to obj.totalFrames in the function above)
    start: "top 99%", //where trigger starts
    pin: false,
    startingFrame: 15, //usually 0, unless we want animation to start from a later frame in this case
    aspectRatio : 'xMidYMin meet' //toggle svg aspect ratio setting
});

//trigger for div to be pinned, has to be seperated from above ScrollLottie function as I want the animation to play at a different instance compared to when i want to pin it...
ScrollTrigger.create({
  trigger: ".government-2",
  start: "top top",
  end: s == "_d" ? "+=1000%" : "+=180%",
  pin: true,
});


//03_Gov
ScrollLottie({
  target: ".government-3",
  path: `./animations/03_Gov${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=650%" : "+=350%",
  start: "top 90%",
  pin: false,
  startingFrame: 0,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".government-3",
  start: "top top",
  end: s == "_d" ? "+=490%" : "+=230%",
  pin: true,
});

//04_Cover
ScrollLottie({
  target: ".loved-ones-cover-4",
  path: `./animations/04_Cover${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=300%" : "+=125%",
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMax slice'
});

//05_LovedOnes
ScrollLottie({
  target: ".loved-ones-5",
  path: `./animations/05_LovedOnes${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=1600%" : "+=580%",
  start: "top 90%",
  pin: false,
  startingFrame: 20,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".loved-ones-5",
  start: "top top",
  end: s == "_d" ? "+=1430%" : "+=420%",
  pin: true,
});

// 06_LovedOnes
// ScrollLottie({
//   target: ".loved-ones-6",
//   path: `./animations/06_LovedOnes${s}.json`,
//   duration: s == "_d" ? 1 : 0.6,
//   end: s == "_d" ? "+=600%" : "+=215%",
//   start: "top center",
//   pin: false,
//   startingFrame: 0,
//   aspectRatio : 'xMidYMin meet'
// });

// ScrollTrigger.create({
//   trigger: ".loved-ones-6",
//   start: "top top",
//   end: s == "_d" ? "+=430%" : "+=130%",
//   pin: true,
// });


//07_Cover
ScrollLottie({
  target: ".gov-loved-ones-cover-7",
  path: `./animations/07_Cover${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=300%" : "+=90%",
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMax slice'
});

//08_GovLovedOnes
ScrollLottie({
  target: ".gov-loved-ones-8",
  path: `./animations/08_GovLovedOnes${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=900%" : "+=320%",
  start: "top 99%",
  pin: false,
  startingFrame: 15,
  aspectRatio : 'xMidYMin meet'
});

ScrollTrigger.create({
  trigger: ".gov-loved-ones-8",
  start: "top top",
  end: s == "_d" ? "+=720%" : "+=185%",
  pin: true,
});

// 09_Cover
ScrollLottie({
  target: ".ending-9",
  path: `./animations/09_Cover${s}.json`,
  duration: s == "_d" ? 1 : 0.6,
  end: s == "_d" ? "+=350%" : "+=175%",
  start: "top top",
  pin: true,
  startingFrame: 0,
  aspectRatio : 'xMidYMid slice'
});