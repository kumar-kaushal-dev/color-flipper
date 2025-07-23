const body = document.body;
const colorCodeDisplay = document.getElementById('color-code');

function setColor(color) {
  body.classList.remove("dark-mode", "light-mode");
  body.style.backgroundColor = color;
  updateTextColor(color);
  colorCodeDisplay.textContent = `Current Color: ${color}`;
}

function randomColor() {
  body.classList.remove("dark-mode", "light-mode");

  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const color = `rgb(${r}, ${g}, ${b})`;
  body.style.backgroundColor = color;
  updateTextColor(color);
  colorCodeDisplay.textContent = `Current Color: ${color}`;
}

function updateTextColor(bgColor) {
  const rgb = bgColor.match(/\d+/g);
  if (!rgb) return;
  const [r, g, b] = rgb.map(Number);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  const textColor = brightness > 125 ? 'black' : 'white';
  body.style.color = textColor;
}

function setTheme(mode) {
  body.style.backgroundColor = '';
  body.style.color = '';
  body.classList.remove("dark-mode", "light-mode");

  if (mode === 'dark') {
    body.classList.add("dark-mode");
    colorCodeDisplay.textContent = "Current Theme: Dark Mode";
  } else {
    body.classList.add("light-mode");
    colorCodeDisplay.textContent = "Current Theme: Light Mode";
  }
}

// Set default theme
setTheme('light');
