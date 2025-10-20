const scroll = new LocomotiveScroll({
  el: document.querySelector(".ScrollContainer"),
  smooth: true,
});
scroll.update();

gsap.to(".h1anim", {
  y: 0,
  duration: 0.6,
  stagger: 0.1,
  ease: Power1.easeInOut,
});
gsap.to(".movedown", {
  y: 0,
  duration: 1.2,
  stagger: 0.2,
  delay: 0,
  ease: Power1.easeInOut,
});
gsap.from(".nav", {
  y: 20,
  opacity: 0,
  duration: 0.8,
  ease: Power1.easeInOut,
});
gsap.from(".footer1", {
  y: -20,
  delay: 0.5,
  opacity: 0,
  duration: 0.8,
  ease: Power1.easeInOut,
});

// onclick menu list shower
var menuelement = document.getElementById("menu");
// var listElement = document.querySelector(".visibleme");
var listElement = document.querySelector(".hideme");
menuelement.onclick = function () {
  listElement.style.opacity = 1;
  menuelement.style.opacity = 1;

  listElement.classList.toggle("hideme");
  gsap.from(".visibleme", {
    delay: 0,
    opacity: 0,
    duration: 0.3,
    ease: Power1.easeInOut,
  });
  menuelement.classList.toggle("hidemenu");
  setTimeout(() => {
    gsap.to(".visibleme", {
      delay: 0,
      opacity: 0,
      duration: 0.8,
      ease: Power1.easeInOut,
    });

    listElement.classList.toggle("hideme");

    menuelement.style.opacity = 0;

    gsap.to(menuelement, {
      delay: 0.3,
      opacity: 1,
      duration: 0.8,
      ease: Power1.easeInOut,
    });
    menuelement.classList.toggle("hidemenu");
  }, 50000);
};

// Mouse Follower Circle
function MouseFollower() {
  const main = document.querySelector(".main");
  const Circle = document.querySelector(".FollowUpCircle");
  main.addEventListener("mouseout", function () {
    Circle.style.setProperty("visibility", "hidden"); //to hide circle
  });

  main.addEventListener("mousemove", function (chai) {
    const mouseX = chai.clientX - main.getBoundingClientRect().left;
    const mouseY = chai.clientY - main.getBoundingClientRect().top;
    Circle.style.setProperty("visibility", "visible"); //to make circle visible
    Circle.style.setProperty("--circle", `translate(${mouseX}px, ${mouseY}px)`);
  });
}
MouseFollower();
// to distort on mouse move--------------------

// const scrollContainer = document.querySelector(".ScrollContainer");
// const waterAnimation = document.getElementById("water-animation");
// let mouseMoveTimer;

// // Function to stop the filter animation and freeze the current state
// function freezeWater() {
//   // 1. Pause the SVG animation (this freezes the ripple/turbulence pattern)
//   if (waterAnimation) {
//     waterAnimation.pauseAnimations();
//   }

//   // 2. Start a timer to fade out the *filter* after movement stops
//   mouseMoveTimer = setTimeout(() => {
//     scrollContainer.classList.remove("water-active");
//   }, 500); // 500ms delay before the filter fades out
// }

// // Function to start the filter animation and apply the CSS filter
// function activateWater() {
//   // Clear any pending fade-out timer
//   clearTimeout(mouseMoveTimer);

//   // 1. Add the CSS class to apply the filter
//   scrollContainer.classList.add("water-active");

//   // 2. Play the SVG animation (this starts the ripple/turbulence movement)
//   if (waterAnimation) {
//     waterAnimation.unpauseAnimations();
//   }
// }

// // EVENT LISTENERS on the Scroll Container
// scrollContainer.addEventListener("mousemove", () => {
//   // When the mouse moves, activate the filter and reset the pause timer
//   activateWater();

//   // Set a new timer to pause the animation if no movement is detected
//   // If mouse doesn't move for 50ms, we call the freeze function
//   clearTimeout(mouseMoveTimer);
//   mouseMoveTimer = setTimeout(freezeWater, 50);
// });

// scrollContainer.addEventListener("mouseleave", () => {
//   // When leaving the container, immediately start the fade-out process
//   freezeWater();
// });

// distored logic ends here --------------------

// image shower on hover

function ShowImage() {
  const plugDiv1 = document.getElementById("plugDiv1");
  const plugDiv2 = document.getElementById("plugDiv2");
  const plugDiv3 = document.getElementById("plugDiv3");
  const plugImg1 = document.querySelector("#plugDiv1 img");
  const plugImg2 = document.querySelector("#plugDiv2 img");
  const plugImg3 = document.querySelector("#plugDiv3 img");
  function hover(plugDiv1, plugImg1) {
    plugDiv1.addEventListener("mouseenter", () => {
      plugImg1.style.setProperty("visibility", "visible");
    });
    plugDiv1.addEventListener("mouseleave", () => {
      plugImg1.style.setProperty("visibility", "hidden");
    });
  }
  hover(plugDiv1, plugImg1);
  hover(plugDiv2, plugImg2);
  hover(plugDiv3, plugImg3);
}
ShowImage();

//circle size increaser on image hover

function MakeCircleBig() {
  // const plugImg1=document.querySelector("#plugDiv1 img");
  // const plugImg2=document.querySelector("#plugDiv2 img");
  // const plugImg3=document.querySelector("#plugDiv3 img");
  const plugImgs = document.querySelectorAll(".plugdivs img ");
  plugImgs.forEach((plugImgs) => {
    plugImgs.addEventListener("mouseover", () => {
      const circleBig = document.querySelector(".FollowUpCircle");

      circleBig.style.setProperty("width", "10vw");
      circleBig.style.setProperty("height", "10vw");
      circleBig.textContent = "View";
      circleBig.style.setProperty("opacity", "70%");
      circleBig.style.setProperty("mix-blend-mode", "normal");
    });
    plugImgs.addEventListener("mouseout", () => {
      const circleBig = document.querySelector(".FollowUpCircle");
      circleBig.style.setProperty("width", "15px");
      circleBig.style.setProperty("height", "15px");
      circleBig.textContent = "";
      circleBig.style.setProperty("opacity", "100%");
      circleBig.style.setProperty("mix-blend-mode", "difference");
    });
  });
}
MakeCircleBig();

// Small circle animation arrow

const circleMini = document.querySelectorAll(".circle");
const Arrow = document.querySelectorAll(".circle img");
// console.log(circleMini);
// console.log(Arrow);

function miniCirclesArrowAnimation() {
  circleMini.forEach((circle) => {
    circle.addEventListener("mouseenter", () => {
      // console.log("sgdsg");
      Arrow.forEach((arrow) => {
        arrow.style.transform = "translateY(25px)";

        //let first animation finish
        setTimeout(() => {
          arrow.classList.add("hideArrow");
          arrow.style.transform = "translateY(-25px)";
        }, 200);

        //let seconde animation end

        setTimeout(() => {
          arrow.classList.remove("hideArrow");
          arrow.style.transform = "translateY(0px)";
        }, 500);
      });
    });
  });
}
miniCirclesArrowAnimation();

//plug page image movement.

function imageFollow() {
  const image = document.querySelectorAll(".plugdivs img");
  const imageDiv = document.querySelectorAll(".plugdivs");
  const main = document.querySelector(".main");
  // console.log(imageDiv);
  // console.log(image);

  imageDiv.forEach((div) => {
    div.addEventListener("mouseenter", (chai) => {
      // console.log("workingggg!");
      const mouseX = chai.clientX - main.getBoundingClientRect().left;
      const mouseY = chai.clientY - main.getBoundingClientRect().top;
      // console.log(mouseX);
      // console.log(mouseY);

      image.forEach((image) => {
        // Adjust the offsets to ensure the image stays within the visible boundaries
        const offsetX = Math.min(
          Math.max(mouseX, 0),
          div.clientWidth - image.clientWidth
        );
        const offsetY = Math.min(
          Math.max(mouseY, 0),
          div.clientHeight - image.clientHeight
        );

        // image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        gsap.to(image, {
          x: offsetX,
          y: offsetY,
          duration: 0.3,
          ease: "power2.out",
        });
        // console.log("huhuuu");
      });
    });
  });
}

imageFollow();

// To make menue buttons work

document
  .querySelector('a[href="#contact"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#contact");
    scroll.scrollTo(target);
  });

// contact form js
//
//
//
//
//

const contactForm = document.getElementById("contactForm");
const talkButt = document.getElementById("let'sTalk");
const contactNav = document.getElementById("contactNav");
const closeBtn = document.getElementById("closeFormBtn");
const form = document.getElementById("myForm");

// Show the form smoothly
contactNav.addEventListener("click", (e) => {
  e.preventDefault();
  contactForm.style.display = "flex";
  setTimeout(() => {
    contactForm.classList.add("show");
  }, 10);
});
talkButt.addEventListener("click", (e) => {
  e.preventDefault();
  contactForm.style.display = "flex";
  setTimeout(() => {
    contactForm.classList.add("show");
  }, 10);
});

// Hide the form smoothly
function closeFormSmoothly() {
  contactForm.classList.remove("show");
  setTimeout(() => {
    contactForm.style.display = "none";
  }, 500); // match CSS transition time
}

// Close form when clicking the close button
closeBtn.addEventListener("click", closeFormSmoothly);

// Hide after submitting
form.addEventListener("submit", function () {
  setTimeout(() => {
    closeFormSmoothly();
  }, 1000); // after sending
});

// Js for water-Ripple effect

$(document).ready(function () {
  $("body").ripples({
    // resolution: 512,     // Quality of ripple
    // dropRadius: 20,      // Radius of ripple in px
    // perturbance: 0.04,   // Wave distortion (lower = calmer water)

    resolution: 720,
    dropRadius: 20,
    perturbance: 0.04,
  });
});

// Get the body element
const bodyElement = document.body;

// Function to apply the distortion when the mouse enters the body
bodyElement.addEventListener("mouseenter", () => {
  // Applying the filter distorts everything inside the body element
  bodyElement.classList.add("distort");
});

// Function to remove the distortion when the mouse leaves the body
// Note: 'mouseleave' on the body usually only fires if you move the cursor
// completely outside the browser window. For a full-screen effect, 'mouseenter'
// is the main trigger. You might consider using 'click' as the trigger
// if you want to turn it on/off within the screen.
bodyElement.addEventListener("mouseleave", () => {
  // Remove the filter to return to normal
  bodyElement.classList.remove("distort");
});



// script for date 
function updateTime() {
  const dateDiv = document.getElementById("date");
  if (!dateDiv) return; // 🛑 if element not found, stop here (prevents error)
  
  const now = new Date();
  const options = { hour: '2-digit', minute: '2-digit', hour12: true };
  dateDiv.textContent = now.toLocaleTimeString('en-IN', options);
}

updateTime();
setInterval(updateTime, 1000);
