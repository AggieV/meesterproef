// scroll progression bar code,weg please,als genoeg tijd maak ik hem wel.

// Get the scroll progression bar and steps
// const scrollProgressBar = document.getElementById('scroll-progression-bar');
// const steps = Array.from(scrollProgressBar.getElementsByClassName('step'));

// Calculate the scroll positions for each step
// const stepPositions = [];
// for (let i = 1; i <= steps.length; i++) {
//   stepPositions.push((i / steps.length) * totalMaxScroll);
// }

// // Set the initial state of each step to height: 0%
// steps.forEach(step => {
//   step.style.height = '0%';
//   step.style.opacity = '0'; // Initialize opacity to 0
// });

// // Change the handleScroll function to adjust the progress bar
// function handleScroll() {
//   // Calculate the scroll progress as a percentage
//   const scrollProgress = (window.scrollY / totalMaxScroll) * 100;

//   // Update the completion of each step based on scroll progress
//   steps.forEach((step,index) => {
//     if (scrollProgress >= stepPositions[index]) {
//       // Mark the step as completed
//       step.style.height = '100%';
//       step.style.opacity = '1'; // Make the step visible
//     } else {
//       // Reset the step
//       step.style.height = '0%';
//       step.style.opacity = '0'; // Reset the opacity
//     }
//   });
// }

// // Attach the event listener to the window for the scroll event
// window.addEventListener('scroll',handleScroll);

// // Handle the wheel event
// function handleWheel() {
//   // Fade out the scroll indicator only on the first scroll
//   if (!hasScrolled) {
//     gsap.to(scrollIndicator,{ opacity: 0,duration: 0.5,ease: 'power2.out' });
//     hasScrolled = true; // Set the flag to true after the first scroll
//   }
// }

// // Attach the event listener to handle the wheel event
// window.addEventListener('wheel',handleWheel);

// Get elements for intro control
const overlay = document.querySelector('.overlay');
const imageContainer = document.querySelector('.image-container');
const centeredContainer = document.querySelector('.centered-container');
const skipIntroButton = document.getElementById('skipIntroButton');
const soundButton = document.getElementById('soundButton');
const audio = document.getElementById('myAudio');

// skip intro button functionality
skipIntroButton.addEventListener('click',function() {
  centeredContainer.style.display = 'none';
  soundButton.style.display = 'none';
  skipIntroButton.style.display = 'none';
  imageContainer.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  audio.pause();
});

// Sound button functionality
let isSoundOn = false;
const buttonText = isSoundOn ? 'Geluid uit' : 'Geluid aan';
soundButton.textContent = buttonText;

function toggleSound() {
  console.log('Button clicked!');
  isSoundOn = !isSoundOn;
  const buttonText = isSoundOn ? 'Geluid uit' : 'Geluid aan';
  soundButton.textContent = buttonText;

  // Check if the audio is currently playing
  const isAudioPlaying = !audio.paused;

  // Toggle audio playback
  if (isSoundOn) {
    audio.play();
  } else {
    audio.pause();
  }
}

soundButton.addEventListener('click',toggleSound);

// Trigger initial sound state based on the initial value of isSoundOn
if (isSoundOn) {
  audio.play();
}

// Scroll functionality
var scrollCursor = 0;
const totalMaxScroll = 110;
const totalMinScroll = 0;

//scroll indicator
const scroll_name = ".scroll-indicator"
const scroll_start = 0;
const scroll_stop = 5;
const scroll_duration = 0.2;

//down-arrow (of scroll indicator)
const arrow_name = ".down-arrow"
const arrow_start = 0;
const arrow_stop = 5;
const arrow_duration = 0.2;

// first title
const title_1_name = ".title-1"
const title_1_x1 = 350;
const title_1_y1 = 350;
const title_1_SCbegin = 0;
const title_1_SCend = 10;
const title_1_dur = 0.5;

// second title
const title_2_name = ".title-2"
const title_2_x1 = -600;
const title_2_y1 = 380;
const title_2_SCbegin = 10;
const title_2_SCend = 20;
const title_2_dur = 0.5;

// third title
const title_3_name = ".title-3"
const title_3_x1 = 400;
const title_3_y1 = -620;
const title_3_SCbegin = 20;
const title_3_SCend = 30;
const title_3_dur = 0.5;

// first element
const el_1_name = ".animated-element-1";

const el_1_start = 35;
const el_1_stop = 40;
const el_1_duration = 0.2;

// second element
const el_2_name = ".animated-element-2";

const el_2_in_start = 35;
const el_2_in_stop = 40;
const el_2_in_duration = 0.2;
   
const el_2_out_start = 50;
const el_2_out_stop = 60;
const el_2_out_duration = 0.2;

// Floris Visser flyby
// const intro_floris_name = ".intro-floris";
// const intro_floris_x1 = 400;
// const intro_floris_y1 = 0;
// const intro_floris_SCbegin = 40;
// const intro_floris_SCend = 50;
// const intro_floris_dur = 0.5;

// fadeInImage('intro-volkskantine','images/volkskantine-binnen.png',el_3_in_duration,0);
// fadeInImage('intro-bord','images/bord.png',el_4_in_duration,0);

// third element
const el_3_name = ".animated-element-3";

const el_3_in_start = 50;
const el_3_in_stop = 60;
const el_3_in_duration = 0.2;

const el_3_out_start = 70;
const el_3_out_stop = 80;
const el_3_out_duration = 0.2;

// fourth element
const el_4_name = ".animated-element-4";

const el_4_in_start = 70;
const el_4_in_stop = 80;
const el_4_in_duration = 0.2;

const el_4_out_start = 90;
const el_4_out_stop = 100;
const el_4_out_duration = 0.2;

// fifth element
const el_5_name = ".animated-element-5";

const el_5_in_start = 90;
const el_5_in_stop = 100;
const el_5_in_duration = 0.2;

const el_5_out_start = 100;
const el_5_out_stop = 110;
const el_5_out_duration = 0.2;

// Base element movement on local bounds and scroll cursor
function moveOnScroll(element,xstop,ystop,SCbegin,SCend,duration){
    if(scrollCursor >= SCbegin && scrollCursor <= SCend){
      console.log(element);
      x = (scrollCursor-SCbegin)/(SCend-SCbegin)*(xstop); //no x begin cause gsap elements are always at 0,0
      y = (scrollCursor-SCbegin)/(SCend-SCbegin)*(ystop);
      gsap.to(element,{ x: x,y: y,duration: duration,ease: "power2.out" });
    }
  }

// Base element opacity fade outs on local bounds and scroll cursor
function fadeOut(element,start,stop,duration){
  if (scrollCursor >= start && scrollCursor <= stop){
    element_opacity = (scrollCursor-start)/(stop-start)*-1+1; //*-1+1 is fade out
    gsap.to(element,{ opacity: element_opacity,duration: duration });
    if(element_opacity==0){
      document.querySelector(element).style.display = 'none';
    }else{
      document.querySelector(element).style.display = 'block';
    }
  }
}

// Base element opacity fade in on local bounds and scroll cursor
function fadeIn(element,start,stop,duration){
  if (scrollCursor >= start && scrollCursor <= stop){
    element_opacity = (scrollCursor-start)/(stop-start);
    gsap.to(element,{ opacity: element_opacity,duration: duration });
    if(element_opacity==0){
      document.querySelector(element).style.display = 'none';
    }else{
      document.querySelector(element).style.display = 'block';
    }
  }
}

// Function to create and show an image element when needed
// function showImage(elementClass,imageUrl) {
//   const container = document.querySelector('.centered-container');
//   const imageElement = document.createElement('img');
//   imageElement.classList.add(elementClass);
//   imageElement.src = imageUrl;
//   imageElement.alt = imageUrl;
//   container.appendChild(imageElement);

//   // Make the image visible with a slight delay to ensure it's properly added to the DOM
//   setTimeout(() => {
//     imageElement.style.display = 'block';
//     imageElement.style.opacity = 1;
//   },50);
// }

// // Usage for each animated element
// showImage('intro-floris','images/floris-visser.jpeg');
// showImage('intro-volkskantine','images/volkskantine-binnen.png');
// showImage('intro-bord','images/bord.png');


// Initialize scroll cursor
// var scrollCursor = 0;

// Function to handle the wheel event
function handleWheel(event) {

// Get the deltaY property to determine the scrolling direction
var deltaY = event.deltaY;

 // Update scroll cursor and keep within bounds
 if (deltaY > 0) {
  scrollCursor += 1;
  scrollCursor = Math.min(totalMaxScroll,scrollCursor); //max bound
} else {
  scrollCursor += -1;
  scrollCursor = Math.max(totalMinScroll,scrollCursor); //min bound
}

  // NIET CONSTANTEN HIER DEFINIEREN AGNES,DIT IS EEN LOOP!! allen functies aanspreken aub
  // scroll indicator
  fadeOut(scroll_name,scroll_start,scroll_stop,scroll_duration);
  fadeOut(arrow_name,arrow_start,arrow_stop,arrow_duration);
  
  // title elements
  moveOnScroll(title_1_name,title_1_x1,title_1_y1,title_1_SCbegin,title_1_SCend,title_1_dur);
  moveOnScroll(title_2_name,title_2_x1,title_2_y1,title_2_SCbegin,title_2_SCend,title_2_dur);
  moveOnScroll(title_3_name,title_3_x1,title_3_y1,title_3_SCbegin,title_3_SCend,title_3_dur);

  // Fade out titles and first slide
  fadeOut(el_1_name,el_1_start,el_1_stop,el_1_duration); //waar is deze gebleven?
  fadeOut(title_1_name,el_1_start,el_1_stop,el_1_duration);
  fadeOut(title_2_name,el_1_start,el_1_stop,el_1_duration);
  fadeOut(title_3_name,el_1_start,el_1_stop,el_1_duration);

  // Animate .intro-meisje
  moveOnScroll('.intro-meisje',2800,0,el_1_start,el_2_out_stop,el_2_out_duration);
  
  // Fade in and out intro slide 2
  fadeIn(el_2_name,el_2_in_start,el_2_in_stop,el_2_in_duration);
  fadeOut(el_2_name,el_2_out_start,el_2_out_stop,el_2_out_duration);

  // Animate .intro-floris
  moveOnScroll('.intro-floris',2800,0,el_2_in_start,el_3_in_start,0.5);
  fadeOut('.intro-floris',el_3_in_start,el_3_in_stop,el_1_duration);

  // Fade in and out intro slide 3
  fadeIn(el_3_name,el_3_in_start,el_3_in_stop,el_3_in_duration);
  fadeOut(el_3_name,el_3_out_start,el_3_out_stop,el_3_out_duration);

  // Animate .intro-volkskantine
  moveOnScroll('.intro-volkskantine',2800,0,el_3_in_start,el_4_in_start,0.5);
  fadeOut('.intro-volkskantine',el_4_in_start,el_4_in_stop,el_1_duration);
  
  fadeIn(el_4_name,el_4_in_start,el_4_in_stop,el_4_in_duration);
  fadeOut(el_4_name,el_4_out_start,el_4_out_stop,el_4_out_duration);

  // Animate .intro-bord
  moveOnScroll('.intro-bord',2800,0,el_4_in_start,el_5_in_start,0.5);
  fadeOut('.intro-bord',el_5_in_start,el_5_out_stop-10,el_1_duration);

  // Animate .centered-container
  moveOnScroll('.centered-container',-500,0,el_5_in_start,el_5_out_stop,el_5_out_duration);
}


// Achtergrond deur als kantine entree (intro exit) knop
  

centeredContainer.addEventListener('click',function() {
  centeredContainer.style.display = 'none';
  soundButton.style.display = 'none';
  skipIntroButton.style.display = 'none';
  imageContainer.classList.toggle('hidden');
  overlay.classList.toggle('hidden');
  audio.pause();
  });


//tekst verandert van kleur

function highlightTextOnHover(element,color,duration,delay){
  const textContainer = document.querySelector(element);
  const letters = textContainer.innerText.split(""); // Split the text into an array of letters
  textContainer.textContent = ''; // Remove original text
  const tl = gsap.timeline();
  
  letters.forEach((letter,index) => {
    const span = document.createElement("span"); // Create a span element for each letter
    span.innerText = letter;
    textContainer.appendChild(span);
    
    // Color change animation
    tl.to(span,{
      color: color,// Set the desired color
      duration: duration,    // Set the duration of the color change
      delay: index * delay,// Add a delay based on the letter index
    });
  });
  
  tl.play();
  tl.pause();
  
  const stuff = document.querySelector(element);
  stuff.addEventListener('mouseover',function() {
    tl.resume();
  });
  stuff.addEventListener('mouseleave',function() {
    tl.pause();
  });
}

// Attach the event listener to the document
document.addEventListener("wheel",handleWheel);

highlightTextOnHover(el_2_name,'#242424',0.05);
highlightTextOnHover(el_3_name,'#242424',0.05);
highlightTextOnHover(el_4_name,'#242424',0.05);

// // Initialize hasScrolled flag
// let hasScrolled = false;

// // Handle the wheel event
// function handleWheel() {
//     // Fade out the scroll indicator only on the first scroll
//     if (!hasScrolled) {
//         gsap.to('#scroll-indicator', { opacity: 0, duration: 0.5, ease: 'power2.out' });
//         hasScrolled = true; // Set the flag to true after the first scroll
//     }
// }



// //scroll cursor variables

// var scrollCursor = 0;
// const totalMinScroll = 0;
// const totalMaxScroll = 110; 

// const overlay = document.querySelector('.overlay');
// const imageContainer = document.querySelector('.image-container');
// const skipIntroButton = document.getElementById('skipIntroButton');

// skipIntroButton.addEventListener('click', function() {
//   console.log('Skip intro button clicked');
//   soundButton.style.display = 'none';
//   skipIntroButton.style.display = 'none';
//   imageContainer.classList.toggle('hidden');
//   overlay.classList.toggle('hidden');
//   audio.pause();
// });





// // Get the button and audio elements
// const soundButton = document.getElementById('soundButton');
// const audio = document.getElementById('myAudio');

// // Set an initial state for sound (assumed sound is initially off)
// let isSoundOn = false;
// const buttonText = isSoundOn ? 'Geluid uit' : 'Geluid aan';
// soundButton.textContent = buttonText;

// function toggleSound() {
//   console.log('Button clicked!');
//   isSoundOn = !isSoundOn;
//   const buttonText = isSoundOn ? 'Geluid uit' : 'Geluid aan';
//   soundButton.textContent = buttonText;

//   // Check if the audio is currently playing
//   const isAudioPlaying = !audio.paused;

//   // Toggle audio playback
//   if (isSoundOn) {
//     audio.play();
//   } else {
//     audio.pause();
//   }

//   // You can add additional logic here based on the sound state (isSoundOn)
//   // For now, let's just log the current sound state to the console.
//   console.log(`Sound is ${isSoundOn ? 'on' : 'off'}`);
// }





// // Add a click event listener to the button
// soundButton.addEventListener('click', toggleSound);

// // Trigger initial sound state based on the initial value of isSoundOn
// if (isSoundOn) {
//   audio.play();
// }



// // first title
// const title_1_name = ".title-1"
// const title_1_x1 = 350;
// const title_1_y1 = 350;
// const title_1_SCbegin = 0;
// const title_1_SCend = 10;
// const title_1_dur = 0.5;

// // second title
// const title_2_name = ".title-2"
// const title_2_x1 = -600;
// const title_2_y1 = 380;
// const title_2_SCbegin = 10;
// const title_2_SCend = 20;
// const title_2_dur = 0.5;

// // third title
// const title_3_name = ".title-3"
// const title_3_x1 = 400;
// const title_3_y1 = -620;
// const title_3_SCbegin = 20;
// const title_3_SCend = 30;
// const title_3_dur = 0.5;

// // first element
// const el_1_name = ".animated-element-1";

// const el_1_start = 35;
// const el_1_stop = 40;
// const el_1_duration = 0.2;

// // second element
// const el_2_name = ".animated-element-2";

// const el_2_in_start = 35;
// const el_2_in_stop = 40;
// const el_2_in_duration = 0.2;
   
// const el_2_out_start = 50;
// const el_2_out_stop = 60;
// const el_2_out_duration = 0.2;

// // third element
// const el_3_name = ".animated-element-3";

// const el_3_in_start = 50;
// const el_3_in_stop = 60;
// const el_3_in_duration = 0.2;

// const el_3_out_start = 70;
// const el_3_out_stop = 80;
// const el_3_out_duration = 0.2;

// // fourth element
// const el_4_name = ".animated-element-4";

// const el_4_in_start = 70;
// const el_4_in_stop = 80;
// const el_4_in_duration = 0.2;

// const el_4_out_start = 90;
// const el_4_out_stop = 100;
// const el_4_out_duration = 0.2;

// // fifth element
// const el_5_name = ".animated-element-5";

// const el_5_in_start = 90;
// const el_5_in_stop = 100;
// const el_5_in_duration = 0.2;

// const el_5_out_start = 100;
// const el_5_out_stop = 110;
// const el_5_out_duration = 0.2;



// // Function to create and show an image element with fade in effect
// function fadeInImage(elementClass, imageUrl, fadeInDuration, fadeInDelay) {
//   const container = document.querySelector('.centered-container');
//   const imageElement = document.createElement('img');
//   imageElement.classList.add(elementClass);
//   imageElement.src = imageUrl;
//   imageElement.alt = imageUrl;
//   container.appendChild(imageElement);

//   // Set initial opacity to 0
//   gsap.set(imageElement, { opacity: 0 });

//   // Use GSAP to animate the fade in effect
//   gsap.to(imageElement, {
//     opacity: 1,
//     duration: fadeInDuration,
//     delay: fadeInDelay,
//   });
// }

// // Fade in images for animated sections 2, 3, and 4
// fadeInImage('intro-floris', 'images/floris-visser.jpeg', el_2_in_duration, 0);
// fadeInImage('intro-volkskantine', 'images/volkskantine-binnen.png', el_3_in_duration, 0);
// fadeInImage('intro-bord', 'images/bord.png', el_4_in_duration, 0);





// // Base element movement on local bounds and scroll cursor
// function moveOnScroll(element,xstop,ystop,SCbegin,SCend,duration){
//     if(scrollCursor >= SCbegin && scrollCursor <= SCend){
//       x = (scrollCursor-SCbegin)/(SCend-SCbegin)*(xstop); //no x begin cause gsap elements are always at 0,0
//       y = (scrollCursor-SCbegin)/(SCend-SCbegin)*(ystop);
//       gsap.to(element, { x: x, y: y, duration: duration, ease: "power2.out" });
//     }
//   }

// // Base element opacity fade outs on local bounds and scroll cursor
// function fadeOut(element,start,stop,duration){
//   if (scrollCursor >= start && scrollCursor <= stop){
//     element_opacity = (scrollCursor-start)/(stop-start)*-1+1; //*-1+1 is fade out
//     gsap.to(element, { opacity: element_opacity, duration: duration });
//     if(element_opacity==0){
//       document.querySelector(element).style.display = 'none';
//     }else{
//       document.querySelector(element).style.display = 'block';
//     }
//   }
// }

// // Base element opacity fade in on local bounds and scroll cursor
// function fadeIn(element,start,stop,duration){
//   if (scrollCursor >= start && scrollCursor <= stop){
//     element_opacity = (scrollCursor-start)/(stop-start);
//     gsap.to(element, { opacity: element_opacity, duration: duration });
//     if(element_opacity==0){
//       document.querySelector(element).style.display = 'none';
//     }else{
//       document.querySelector(element).style.display = 'block';
//     }
//   }
// }

// // Function to create and show an image element when needed
// // function showImage(elementClass, imageUrl) {
// //   const container = document.querySelector('.centered-container');
// //   const imageElement = document.createElement('img');
// //   imageElement.classList.add(elementClass);
// //   imageElement.src = imageUrl;
// //   imageElement.alt = imageUrl;
// //   container.appendChild(imageElement);

// //   // Make the image visible with a slight delay to ensure it's properly added to the DOM
// //   setTimeout(() => {
// //     imageElement.style.display = 'block';
// //     imageElement.style.opacity = 1;
// //   }, 50);
// // }

// // // Usage for each animated element
// // showImage('intro-floris', 'images/floris-visser.jpeg');
// // showImage('intro-volkskantine', 'images/volkskantine-binnen.png');
// // showImage('intro-bord', 'images/bord.png');


// // Initialize scroll cursor
// // var scrollCursor = 0;

// // Function to handle the wheel event
// function handleWheel(event) {

// // Get the deltaY property to determine the scrolling direction
// var deltaY = event.deltaY;

//  // Update scroll cursor and keep within bounds
//  if (deltaY > 0) {
//   scrollCursor += 1;
//   scrollCursor = Math.min(totalMaxScroll, scrollCursor); //max bound
// } else {
//   scrollCursor += -1;
//   scrollCursor = Math.max(totalMinScroll, scrollCursor); //min bound
// }

//   // Animate .intro-meisje
//   const introMeisjeStart = el_1_start;
//   const introMeisjeStop = el_2_out_stop;
//   const introMeisjeDuration = el_2_out_duration;
//   moveOnScroll('.intro-meisje', 2000, 0, introMeisjeStart, introMeisjeStop, introMeisjeDuration);

//   // Animate .intro-floris
//   const introFlorisStart = el_2_in_start;
//   const introFlorisStop = el_3_out_stop;
//   const introFlorisDuration = el_3_out_duration;
//   moveOnScroll('.intro-floris', 2000, 0, introFlorisStart, introFlorisStop, introFlorisDuration);

//   // Animate .intro-volkskantine
//   const introVolkStart = el_3_in_start;
//   const introVolkStop = el_3_out_stop;
//   const introVolkDuration = el_3_out_duration;
//   moveOnScroll('.intro-volkskantine', 2000, 0, introVolkStart, introVolkStop, introVolkDuration);
  
//   // Animate .intro-bord
//   const introBordStart = el_4_in_start;
//   const introBordStop = el_4_out_stop;
//   const introBordDuration = el_4_out_duration;
//   moveOnScroll('.intro-bord', 2000, 0, introBordStart, introBordStop, introBordDuration);

//   // Animate .centered-container
//   const introContainerStart = el_5_in_start;
//   const introContainerStop = el_5_out_stop;
//   const introContainerDuration = el_5_out_duration;
//   moveOnScroll('.centered-container',-500, 0, introContainerStart, introContainerStop, introContainerDuration);

//   // Get the .centered-container element
// const centeredContainer = document.querySelector('.centered-container');

// // Add a click event listener to make it clickable
// centeredContainer.addEventListener('click', function() {
//   // Hide the centered container
//   centeredContainer.style.display = 'none';

//   // Show the image-container section (adjust the selector accordingly)
//   const imageContainer = document.querySelector('.image-container');
//   imageContainer.style.display = 'block';
// });

// // Change cursor style to pointer
// // centeredContainer.style.cursor = 'pointer';

//   // title elements
//   moveOnScroll(title_1_name, title_1_x1, title_1_y1, title_1_SCbegin, title_1_SCend, title_1_dur);
//   moveOnScroll(title_2_name, title_2_x1, title_2_y1, title_2_SCbegin, title_2_SCend, title_2_dur);
//   moveOnScroll(title_3_name, title_3_x1, title_3_y1, title_3_SCbegin, title_3_SCend, title_3_dur);

//   // Fade out titles and first slide
//   fadeOut(el_1_name, el_1_start, el_1_stop, el_1_duration);
//   fadeOut(title_1_name, el_1_start, el_1_stop, el_1_duration);
//   fadeOut(title_2_name, el_1_start, el_1_stop, el_1_duration);
//   fadeOut(title_3_name, el_1_start, el_1_stop, el_1_duration);

//   // Fade in and out following intro slides
//   fadeIn(el_2_name, el_2_in_start, el_2_in_stop, el_2_in_duration);
//   fadeOut(el_2_name, el_2_out_start, el_2_out_stop, el_2_out_duration);

//   fadeIn(el_3_name, el_3_in_start, el_3_in_stop, el_3_in_duration);
//   fadeOut(el_3_name, el_3_out_start, el_3_out_stop, el_3_out_duration);

//   fadeIn(el_4_name, el_4_in_start, el_4_in_stop, el_4_in_duration);
//   fadeOut(el_4_name, el_4_out_start, el_4_out_stop, el_4_out_duration);
// }





// //tekst verandert van kleur

// function highlightTextOnHover(element,color,duration,delay){
//   const textContainer = document.querySelector(element);
//   const letters = textContainer.innerText.split(""); // Split the text into an array of letters
//   textContainer.textContent = ''; // Remove original text
//   const tl = gsap.timeline();
  
//   letters.forEach((letter, index) => {
//     const span = document.createElement("span"); // Create a span element for each letter
//     span.innerText = letter;
//     textContainer.appendChild(span);
//     console.log('Function called with element:', element)
    
//     // Color change animation
//     tl.to(span, {
//       color: color, // Set the desired color
//       duration: duration,     // Set the duration of the color change
//       delay: index * delay, // Add a delay based on the letter index
//     });
//   });
  
//   tl.play();
//   tl.pause();
  
//   const stuff = document.querySelector(element);
//   stuff.addEventListener('mouseover', function() {
//     tl.resume();
//   });
//   stuff.addEventListener('mouseleave', function() {
//     tl.pause();
//   });
// }

// // Attach the event listener to the document
// document.addEventListener("wheel", handleWheel);

// highlightTextOnHover(el_2_name,'#242424',0.05);
// highlightTextOnHover(el_3_name,'#242424',0.05);
// highlightTextOnHover(el_4_name,'#242424',0.05);