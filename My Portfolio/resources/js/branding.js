// branding.js

window.addEventListener("DOMContentLoaded", () => {
  const branding = document.querySelector(".branding");
  const text = branding.innerText;

  // Separamos las palabras y envolvemos la primera letra de cada palabra en un span
  branding.innerHTML = text
    .split(' ')
    .map(word => `<span class="first-letter">${word.charAt(0).toUpperCase()}</span>${word.slice(1)}`)
    .join(' ');

  const firstLetters = branding.querySelectorAll('.first-letter');
  let visible = true;

  setInterval(() => {
    firstLetters.forEach(letter => {
      letter.style.color = visible ? '#e7e404' : 'white';
    });
    visible = !visible;
  }, 1500); // velocidad del parpadeo en ms
});
