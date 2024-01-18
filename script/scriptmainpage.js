////////INTRO////////

  var audioRadio = document.getElementById('audioRadio');
  var radioImage = document.getElementById('radioImage');

  radioImage.addEventListener('click', function() {
    if (audioRadio && audioRadio.paused) {
      audioRadio.play();
      radioImage.classList.add('pulse');
    } else if (audioRadio) {
      audioRadio.pause();
      radioImage.classList.remove('pulse');
    }
  });



const overlaydialog = document.getElementById('overlay-dialog');

function openOverlay() {
  overlaydialog.style.display = 'block';
}

function closeOverlay() {
  overlaydialog.style.display = 'none';
}


//SCHIJF VAN 5 - GAME//

const bord = document.querySelector('.bord');
const bordPopup = document.getElementById('drag-and-drop-food');
const closeButtonBord = document.getElementById('closeDragDropGameBtn');
let dialogOpenedBord = false;

function openDialogBord() {
  bordPopup.style.opacity = '1';
  bordPopup.style.pointerEvents = 'auto';
  bordPopup.showModal();
  bord.style.pointerEvents = 'none';
  dialogOpenedBord = true;
  openOverlay();
}

function closeDialogBord() {
  bordPopup.close();
  bordPopup.style.opacity = '0';
  bord.style.pointerEvents = 'auto';
  dialogOpenedBord = false;
  closeOverlay();
}

// Open button (food plate in canteen) functionality
closeButtonBord.addEventListener('click', function () {
  closeDialogBord();
});

// Close button in screen functionality
bord.addEventListener('click', function () {
  openDialogBord();
});




// Drag and drop game functionality
function dragElement(elmnt,DROPZONE) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // check if drop is within DROPZONE!!
    var rect = DROPZONE.getBoundingClientRect();
    // console.log('dropzone pos: ',rect.left,rect.top);
    // console.log('tile pos: ',pos3,pos4);
    if(rect.left < pos3 && pos3 < rect.right &&
      rect.top < pos4 && pos4 < rect.bottom){
      // If in DROPZONE!!!, put it there, based on top left percentage
      computedStyles = window.getComputedStyle(DROPZONE);
      topPercentage = computedStyles.getPropertyValue('top');
      leftPercentage = computedStyles.getPropertyValue('left');
      console.log(topPercentage,leftPercentage);
      elmnt.style.top = topPercentage;
      elmnt.style.left = leftPercentage;

    }
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



element1 = document.querySelector('[data-draggable="1"]');
element2 = document.querySelector('[data-dropzone="1"]');
dragElement(element1,element2);
element1 = document.querySelector('[data-draggable="2"]');
element2 = document.querySelector('[data-dropzone="2"]');
dragElement(element1,element2);
element1 = document.querySelector('[data-draggable="3"]');
element2 = document.querySelector('[data-dropzone="3"]');
dragElement(element1,element2);
element1 = document.querySelector('[data-draggable="4"]');
element2 = document.querySelector('[data-dropzone="4"]');
dragElement(element1,element2);
element1 = document.querySelector('[data-draggable="5"]');
element2 = document.querySelector('[data-dropzone="5"]');
dragElement(element1,element2);

element1 = document.querySelector('[data-draggable="6"]');
element2 = document.querySelector('[data-dropzone="6"]');
dragElement(element1,element2);


  document.addEventListener('DOMContentLoaded', function () {
    const draggableItems = document.querySelectorAll('.draggable-item');
  

//6th - unhealthy food
function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.addEventListener('mousedown', dragMouseDown);

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.addEventListener('mouseup', closeDragElement);
    document.addEventListener('mousemove', elementDrag);
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.removeEventListener('mouseup', closeDragElement);
    document.removeEventListener('mousemove', elementDrag);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const draggableItem6 = document.querySelector('[data-draggable="6"]');
  draggableItem6.addEventListener('click', function () {
    dragElement(draggableItem6);
  });
});



    draggableItems.forEach(item => {
      const itemId = item.getAttribute('data-draggable');
      const popup = document.getElementById(`popup${itemId}`);
  
      item.addEventListener('click', function () {
        togglePopup(popup);
      });
    });
  
    function togglePopup(popup) {
      if (popup.style.display === 'block') {
        popup.style.display = 'none';
      } else {
        closeAllPopups();
        popup.style.display = 'block';
      }
    }
  
    function closeAllPopups() {
      const popups = document.querySelectorAll('.popup');
      popups.forEach(popup => {
        popup.style.display = 'none';
      });
    }
  
    // Add event listener to close popups when clicking outside
    document.addEventListener('click', function (event) {
      const clickedElement = event.target;
      if (!clickedElement.classList.contains('draggable-item')) {
        closeAllPopups();
      }
    });
  
  });
  


//FLORIS VISSER//

function openDialogFloris() {
  florisVisserPopup.style.opacity = '1';
  florisVisserPopup.style.pointerEvents = 'auto';
  florisVisserPopup.showModal();
  florisVisser.style.pointerEvents = 'none';
  dialogOpenedFloris = true;
}

function closeDialogFloris() {
  florisVisserPopup.close();
  florisVisserPopup.style.opacity = '0';
  florisVisser.style.pointerEvents = 'auto';
  dialogOpenedFloris = false;
}

const florisVisser = document.querySelector('.floris-visser');
const florisVisserPopup = document.getElementById('florisVisserPopup');
const closeButtonFloris = document.getElementById('closeFlorisVisserDialogBtn');
closeButtonFloris.textContent = 'Sluit af';
let dialogOpenedFloris = false;

// Ensure the dialog is closed and hidden initially
florisVisserPopup.style.opacity = '0';
florisVisserPopup.style.pointerEvents = 'none';

function toggleDialogFloris() {
  if (dialogOpenedFloris) {
    closeDialogFloris();
    closeOverlay();
  } else {
    openDialogFloris();
    openOverlay();
  }
}

closeButtonFloris.addEventListener('click', function () {
  closeDialogFloris();
  closeOverlay();
});

florisVisser.addEventListener('click', function() {
  toggleDialogFloris();
});



//QUIZ//


  // const startQuizBtn = document.getElementById('startQuizBtn');
  // const startQuizDiv = document.querySelector('.start-quiz');
  // // const questions = document.querySelectorAll('.question');

  // startQuizBtn.addEventListener('click', function () {
  //   // Add 'overlay' class to start-quiz div to enable overlay effect
  //   startQuizDiv.classList.add('overlay');

  //   // Hide the start-quiz div immediately
  //   startQuizDiv.style.display = 'none';

  //   // Show the first question after a short delay (you can adjust the delay)
  //   setTimeout(function () {
  //     questions[0].classList.add('active');
  //   }, 100);
  // });

  // // Add event listeners for fact and fiction buttons in each question (similar to your existing code)
  // // ...

  // // Add more event listeners for other buttons and functionalities
  // // ...




  const quizDialog = document.getElementById('quizDialog');
  const questions = document.querySelectorAll('.question');
  const notifications = document.querySelectorAll('.notification');
  const conclusion = document.querySelector('.conclusion');
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let dialogOpened = false;
  let skipQuestionBtn;


  puzzelboekjeImg.addEventListener('click', function() {
    quizDialog.style.opacity = '1'; // Make the dialog visible
    quizDialog.style.pointerEvents = 'auto'; // Enable interaction with the dialog

    if (dialogOpened) {
      closeDialog(); // Hide the dialog if it's already open
      closeOverlay();
    } else {
      quizDialog.showModal(); // Show the dialog if it's closed
      openOverlay();
      // showNextQuestion(); // Display the first question
      questions[currentQuestionIndex].classList.remove('hidden');
      puzzelboekjeImg.style.pointerEvents = 'none';
      dialogOpened = true;
    }
  });

  // function showNextQuestion() {
  //   questions[currentQuestionIndex].classList.remove('hidden');
    
  //   const factButton = questions[currentQuestionIndex].querySelector('.fact');
  //   const fictionButton = questions[currentQuestionIndex].querySelector('.fiction');
  
  //   factButton.addEventListener('click', function() {
  //     handleAnswer(true);
  //   });
  
  //   fictionButton.addEventListener('click', function() {
  //     handleAnswer(false);
  //   });
  // }

  const factButton = questions[currentQuestionIndex].querySelector('.fact');
  const fictionButton = questions[currentQuestionIndex].querySelector('.fiction');

  factButton.addEventListener('click', function() {
    handleAnswer(true);
  });

  fictionButton.addEventListener('click', function() {
    handleAnswer(false);
  });

  let timer;

  function showNextQuestionOrConclusion() {
    questions[currentQuestionIndex].classList.add('hidden');

    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      questions[currentQuestionIndex].classList.remove('hidden');
    } else {
      showConclusion();
    }
  }

  function handleAnswer(isFact) {
    const currentQuestion = questions[currentQuestionIndex];
    const currentNotification = notifications[currentQuestionIndex];

    notifications.forEach(notification => {
      notification.classList.add('hidden');
    });

    if (isFact) {
      currentNotification.textContent = 'Goed!';
      currentNotification.classList.add('correct');
      correctAnswers++;
      console.log(correctAnswers);
    } else {
      currentNotification.textContent = 'Helaas...';
      currentNotification.classList.add('incorrect');
    }

    currentNotification.classList.remove('hidden');

    clearTimeout(timer);
    timer = setTimeout(showNextQuestionOrConclusion, 3000);
  }



  function showConclusion() {
    let conclusionText = '';
  
    if (correctAnswers >= 3 && correctAnswers <= 5) {
      conclusionText = `Goed gedaan! Je had ${correctAnswers} van de ${questions.length} correcte antwoorden.`;
    } else {
      conclusionText = `Sorry, je hebt ${correctAnswers} van de ${questions.length} vragen goed beantwoord. Misschien de volgende keer beter!`;
    }
  
    conclusion.textContent = conclusionText;
    conclusion.classList.remove('hidden');
    conclusion.style.fontSize = '1.3em';
  
    questions[questions.length - 1].classList.add('hidden');
  
    conclusion.querySelectorAll('button').forEach(button => {
      button.remove();
    });
  
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
  
    const closeButton = document.createElement('button');
    closeButton.textContent = 'Sluit Quiz Af';
    closeButton.classList.add('close-btn');
    closeButton.addEventListener('click', function () {
      closeDialog();
    });
  
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Doe Quiz Opnieuw';
    restartButton.classList.add('restart-btn');
    restartButton.addEventListener('click', function () {
      resetQuiz();
      closeDialog();
      puzzelboekjeImg.click();
    });
  
    buttonContainer.appendChild(closeButton);
    buttonContainer.appendChild(restartButton);
  
    conclusion.appendChild(buttonContainer);
  
    // Display video only when there are 0-2 correct answers
    if (correctAnswers >= 0 && correctAnswers <= 2) {
      const videoElementUnhappy = document.createElement('video');
      videoElementUnhappy.src = 'video/unhappy-food.mp4';
      videoElementUnhappy.autoplay = true;
      videoElementUnhappy.loop = true;
      videoElementUnhappy.muted = true;
      videoElementUnhappy.setAttribute('controlsList', 'nodownload');
      videoElementUnhappy.style.width = '600px';
      videoElementUnhappy.style.height = '400px';
      videoElementUnhappy.style.pointerEvents = 'none';
  
      conclusion.appendChild(videoElementUnhappy);
    }
  
    // Display video only when there are 3-5 correct answers
    if (correctAnswers >= 3 && correctAnswers <= 5) {
      const videoElement = document.createElement('video');
      videoElement.src = 'video/happy-food.mp4';
      videoElement.autoplay = true;
      videoElement.loop = true;
      videoElement.muted = true;
      videoElement.setAttribute('controlsList', 'nodownload');
      videoElement.style.width = '600px';
      videoElement.style.height = '400px';
      videoElement.style.pointerEvents = 'none';
  
      conclusion.appendChild(videoElement);
    }
  }
  
  
  

  function resetQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questions.forEach((question, index) => {
      if (index === 0) {
        question.classList.remove('hidden');
      } else {
        question.classList.add('hidden');
      }
    });
    conclusion.classList.add('hidden');
    notifications.forEach(notification => {
      notification.classList.remove('hidden');
    });
  }

  const closeButton = document.getElementById("closeQuizBtn");

closeButton.addEventListener('click', function(event) {
    closeDialog();
    closeOverlay();
  });

  function closeDialog() {
    quizDialog.close();
    quizDialog.style.opacity = '0';
    puzzelboekjeImg.style.pointerEvents = 'auto';
    dialogOpened = false;
    resetQuiz();
  }

  quizDialog.addEventListener('click', function(event) {
    if (event.target === quizDialog) {
      closeDialog();
    }
  });

  questions.forEach((question, index) => {
    if (index !== 0) {
      question.classList.add('hidden');
    }

    const factButton = question.querySelector('.fact');
    const fictionButton = question.querySelector('.fiction');

    factButton.addEventListener('click', function() {
      handleAnswer(true);
    });

    fictionButton.addEventListener('click', function() {
      handleAnswer(false);
    });
  });