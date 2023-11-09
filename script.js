

const smiley = document.querySelector('.smiley');

setInterval(() => {
  smiley.classList.toggle('blink');
}, 4000); // Hetzelfde interval als de CSS-animatie