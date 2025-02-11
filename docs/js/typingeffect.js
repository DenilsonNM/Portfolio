const phrases = ["Systems Engineer", "Jr. Frontend Developer"];
const textElement = document.getElementById("typingeffect");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

textElement.textContent = "";

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 80 : 100;

  if (!isDeleting && charIndex === currentPhrase.length + 1) {
    typingSpeed = 2500; // Espera antes de borrar
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    typingSpeed = 500;
  }

  setTimeout(typeEffect, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
  textElement.textContent = "";
  setTimeout(typeEffect, 500);
});
