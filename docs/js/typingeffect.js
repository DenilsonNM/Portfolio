const phrases = ["Developer", "Designer", "Freelancer"]; // Frases a mostrar
const textElement = document.getElementById("text");
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    textElement.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    textElement.textContent = currentPhrase.substring(0, charIndex++);
  }

  let typingSpeed = isDeleting ? 50 : 100; // Velocidad de escritura y borrado

  if (!isDeleting && charIndex === currentPhrase.length) {
    typingSpeed = 1500; // Espera antes de borrar
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Cambia a la siguiente frase
    typingSpeed = 500; // Pequeña pausa antes de escribir la nueva frase
  }

  setTimeout(typeEffect, typingSpeed);
}

// Iniciar el efecto al cargar la página
typeEffect();

