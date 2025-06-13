function redirectToFigma(url) {
  window.open(url, '_blank');
}

function redirectToGit(url) {
  window.open(url, '_blank');
}



function typeText(elementId, text, speed = 50, delay = 0, callback) {
  const el = document.getElementById(elementId);
  el.textContent = ""; // Clear previous text
  let i = 0;

  setTimeout(() => {
    const typing = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(typing);
        if (callback) callback(); // Trigger next animation
      }
    }, speed);
  }, delay);
}

function startTypingLoop() {
  typeText("typed-title", "I’m Harsh Upadhyay — a creative frontend developer.", 40, 0, () => {
    typeText("typed-subtitle", "Focused on creating clean, responsive UI designs & frontend projects.", 35, 300, () => {
      // Wait a bit, then restart the loop
      setTimeout(() => {
        startTypingLoop(); // 🔁 Loop the whole thing
      }, 2000); // Wait 2 seconds after subtitle finishes
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  startTypingLoop(); // 🚀 Start loop
});


