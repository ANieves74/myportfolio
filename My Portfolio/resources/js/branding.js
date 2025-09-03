// branding.js
window.addEventListener("DOMContentLoaded", () => {
  const branding = document.querySelector(".branding"); // ahora usamos la clase
  const text = branding.innerText;
  let i = 0;

  // Inicializamos el texto en spans, una letra por span
  branding.innerHTML = text.split('').map(c => `<span>${c}</span>`).join('');

  const letters = branding.querySelectorAll('span');

  setInterval(() => {
    // Ponemos todas las letras en blanco
    letters.forEach(letter => letter.style.color = 'white');

    // Pintamos solo la letra actual en amarillo
    letters[i].style.color = '#e7e404';

    // Avanzamos al siguiente índice (vuelve al inicio al final)
    i = (i + 1) % letters.length;
  }, 500); // velocidad del efecto en ms
});
