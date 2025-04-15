// Create bubbles on click
document.addEventListener('click', (e) => {
    createBubble(e.clientX, e.clientY);
  });
  
  // Also create random bubbles automatically
  setInterval(() => {
    createBubble(
      Math.random() * window.innerWidth,
      window.innerHeight + 50
    );
  }, 800);
  
  // Bubble creation & animation
  function createBubble(x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    document.body.appendChild(bubble);
  
    // Random size & color
    const size = Math.random() * 50 + 20;
    const hue = Math.random() * 360;
    Object.assign(bubble.style, {
      width: `${size}px`,
      height: `${size}px`,
      left: `${x - size / 2}px`,
      top: `${y - size / 2}px`,
      background: `hsla(${hue}, 80%, 70%, 0.6)`,
    });
  
    // Animate with anime.js
    anime({
      targets: bubble,
      translateY: -window.innerHeight - 100,
      opacity: 0,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3000 + 2000,
      easing: 'linear',
      complete: () => bubble.remove(), // Remove bubble after animation
    });
  }