const scroll = new LocomotiveScroll({
  el: document.querySelector(".ScrollContainer"),
  smooth: true,
});
scroll.update();
const landingPage = document.querySelector(".landingpage");

if (landingPage) {
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
} else {
  console.log("Landing page not found..");
}

// onclick menu list shower
var menuelement = document.getElementById("menu");
// var listElement = document.querySelector(".visibleme");
var listElement = document.querySelector(".hideme");
if (menuelement) {
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
} else {
  console.log("Menu Element Not found..");
}

// Mouse Follower Circle

function MouseFollower() {
  const body = document.querySelector("body");
  const Circle = document.querySelector(".FollowUpCircle");
  const MAX_TILT_ANGLE = 15;
  // 🆕 Track Locomotive Scroll position
  let scrollY = 0; // 🔥 NEW variable
  scroll.on("scroll", (instance) => {
    // 🔥 NEW event listener
    scrollY = instance.scroll.y;
  });

  if (body && Circle) {
    body.addEventListener("mouseout", function () {
      Circle.style.setProperty("visibility", "hidden"); //to hide circle
    });

    body.addEventListener("mousemove", function (chai) {
      const mouseX = chai.clientX - body.getBoundingClientRect().left;
      const mouseY = chai.clientY + scrollY - body.getBoundingClientRect().top;
      Circle.style.setProperty("visibility", "visible"); //to make circle visible
      Circle.style.setProperty(
        "--circle",
        `translate(${mouseX}px, ${mouseY}px)`
      );
    });
  } else {
    console.log("main not found..");
  }
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

//circle size increaser on image hover

// function MakeCircleBig() {
//   // const plugImg1=document.querySelector("#plugDiv1 img");
//   // const plugImg2=document.querySelector("#plugDiv2 img");
//   // const plugImg3=document.querySelector("#plugDiv3 img");
//   const plugImgs = document.querySelectorAll(".plugdivs img ");

//   if (plugImgs) {
//     plugImgs.forEach((plugImgs) => {
//       plugImgs.addEventListener("mouseover", () => {
//         const circleBig = document.querySelector(".FollowUpCircle");

//         circleBig.style.setProperty("width", "10vw");
//         circleBig.style.setProperty("height", "10vw");
//         circleBig.textContent = "View";
//         circleBig.style.setProperty("opacity", "70%");
//         circleBig.style.setProperty("mix-blend-mode", "normal");
//       });
//       plugImgs.addEventListener("mouseout", () => {
//         const circleBig = document.querySelector(".FollowUpCircle");
//         circleBig.style.setProperty("width", "15px");
//         circleBig.style.setProperty("height", "15px");
//         circleBig.textContent = "";
//         circleBig.style.setProperty("opacity", "100%");
//         circleBig.style.setProperty("mix-blend-mode", "difference");
//       });
//     });
//   } else {
//     console.log("plugImages element not found..");
//   }
// }
// MakeCircleBig();

// Small circle animation arrow

const circleMini = document.querySelectorAll(".circle");
const Arrow = document.querySelectorAll(".circle img");
// console.log(circleMini);
// console.log(Arrow);
if (circleMini) {
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
} else {
  console.log("minicircle with arrow not found..");
}

function imageFollow() {
  const imageDiv = document.querySelectorAll(".plugdivs");
  const MAX_Y_MOVEMENT = 80;

  if (imageDiv) {
    imageDiv.forEach((div) => {
      const currentImage = div.querySelector("img");

      div.addEventListener("mousemove", (chai) => {
        const divRect = div.getBoundingClientRect();

        const mouseX = chai.clientX - divRect.left;
        const mouseY = chai.clientY - divRect.top;

        const targetX = mouseX - 900;

        const centerOffsetY = mouseY - divRect.height / 2;

        const constrainedY = gsap.utils.clamp(
          -MAX_Y_MOVEMENT,
          MAX_Y_MOVEMENT,
          centerOffsetY
        );

        const targetY =
          divRect.height / 2 - currentImage.clientHeight / 2 + constrainedY;

        gsap.to(currentImage, {
          x: targetX,
          y: constrainedY,
          duration: 0.3,
          ease: "power2.out",
          opacity: 1,
        });
      });

      div.addEventListener("mouseleave", () => {
        const currentImage = div.querySelector("img");
        gsap.to(currentImage, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          opacity: 0,
        });
      });
    });
  } else {
    console.log("plugdivs element not found..");
  }
}

imageFollow();

// imagefollow event ended here---

// To make menue buttons work

const aboutsec = document.querySelector('a[href="#About"]');
if (aboutsec) {
  aboutsec.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector("#About");
    scroll.scrollTo(target);
  });
} else {
  console.log("about section not found..");
}

// contact form js
//
//
//
//
//
function showContactForm() {
  const contactForm = document.getElementById("contactForm");
  const talkButt = document.getElementById("let'sTalk");
  const contactNav = document.getElementById("contactNav");
  const closeBtn = document.getElementById("closeFormBtn");
  const form = document.getElementById("myForm");
  const successMessage = document.getElementById('successMessage');

  if (closeBtn && contactForm && contactNav && form) {
    // Show the form smoothly

    contactNav.addEventListener("click", (e) => {
      e.preventDefault();
      contactForm.style.display = "flex";
      setTimeout(() => {
        contactForm.classList.add("show");
      }, 0);
    });
    if (talkButt) {
      talkButt.addEventListener("click", (e) => {
        e.preventDefault();
        contactForm.style.display = "flex";
        setTimeout(() => {
          contactForm.classList.add("show");
        }, 10);
      });
    } else {
      console.log("talkbutt element not found..");
    }
    // Hide the form smoothly
    function closeFormSmoothly() {
      contactForm.classList.remove("show");
      setTimeout(() => {
        contactForm.style.display = "none";
      }, 300); // match CSS transition time
    }

    // Close form when clicking the close button
    closeBtn.addEventListener("click", closeFormSmoothly);

    // Hide after submitting
    form.addEventListener("submit", function () {
      setTimeout(() => {
        closeFormSmoothly();
      }, 1000); // after sending
    });

    // contact form submition popup---

    form.addEventListener('submit', async function (e) {
            e.preventDefault(); // Stop the redirect
            
            const form = e.target;
            const data = new FormData(form);
            const action = form.action; // This is the Formspree URL

            try {
                // Submit the data asynchronously in the background
                const response = await fetch(action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // 1. Hide the contact form smoothly
                    contactForm.style.display = 'none';
                    form.reset(); // Clear form fields
                    
                    // 2. Show the "Thank You" popup with GSAP
                    gsap.to(successMessage, {
                        opacity: 1,
                        visibility: 'visible',
                        scale: 1,
                        pointerEvents: 'auto',
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    
                    // 3. Auto-hide the popup after 3 seconds
                    gsap.to(successMessage, {
                        opacity: 0,
                        visibility: 'hidden',
                        scale: 0.8,
                        pointerEvents: 'none',
                        duration: 0.7,
                        delay: 5, // Display for 3 seconds
                        ease: "power2.in"
                    });
                } else {
                    alert("Oops! There was an error submitting your form.");
                }
            } catch (error) {
                alert("An unexpected network error occurred.");
            }
        });

  } else {
    console.log("contact form not found!!!!!");
  }
}
showContactForm();
//
// contact form logic ends here

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
// bodyElement.addEventListener("mouseenter", () => {
//   // Applying the filter distorts everything inside the body element
//   bodyElement.classList.add("distort");
// });

// Function to remove the distortion when the mouse leaves the body
// Note: 'mouseleave' on the body usually only fires if you move the cursor
// completely outside the browser window. For a full-screen effect, 'mouseenter'
// is the main trigger. You might consider using 'click' as the trigger
// if you want to turn it on/off within the screen.
// bodyElement.addEventListener("mouseleave", () => {
//   // Remove the filter to return to normal
//   bodyElement.classList.remove("distort");
// });

// script for date
function updateTime() {
  const dateDiv = document.getElementById("date");
  if (!dateDiv) return; //if element not found, stop here (prevents error)

  const now = new Date();
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  dateDiv.textContent = now.toLocaleTimeString("en-IN", options);
}

updateTime();
setInterval(updateTime, 1000);

// js for skill section marquee effect------

function textMarquee() {
  const track = document.querySelector(".scrolling-text");

  if (!track) {
    console.log(".scrolling-text not found, skipping final marquee setup.");
    return;
  }

  gsap.set(track, {
    x: "0%",
    force3D: true,
  });

  gsap.to(track, {
    x: "-50%",
    duration: 20,
    ease: "linear",
    repeat: -1,
    force3D: true,
  });
}

textMarquee();

// ------------------------------------------

//  for smooth transition between pages ---
const overlay = document.getElementsByClassName("overlay");
const overlay2 = document.getElementsByClassName("overlay2");
const overlay3 = document.getElementsByClassName("overlay3");
const overlay4 = document.getElementsByClassName("overlay4");
if (overlay || overlay2 || overlay3 || overlay4) {
  document.querySelectorAll("a[href]").forEach((link) => {
    const url = link.getAttribute("href");

    if (url && !url.startsWith("#") && !url.includes("http")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();

        gsap.to(overlay, {
          y: "0%",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = url;
          },
        });
           gsap.to(overlay2, {
          y: "0%",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = url;
          },
        });
            gsap.to(overlay3, {
          y: "0%",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = url;
          },
        });
            gsap.to(overlay4, {
          y: "0%",
          duration: 1.5,
          ease: "power2.inOut",
          onComplete: () => {
            window.location.href = url;
          },
        });
      });
    }
  });
  setTimeout(() => {
    gsap.to(overlay2, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    });
  }, 300);
    setTimeout(() => {
    gsap.to(overlay3, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    });
  }, 300);
    setTimeout(() => {
    gsap.to(overlay4, {
      y: "-100%",
      duration: 1,
      ease: "power2.inOut",
    });
  }, 300);
} else {
  console.log("No overlay found..");
}
