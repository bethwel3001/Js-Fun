// Logo 3D Rotation (Text-based)
anime({
    targets: '.logo-text',
    rotateY: '+=360',
    duration: 8000,
    loop: true,
    easing: 'linear'
  });
  
  // Astronaut Floating Animation
  anime({
    targets: '.astronaut',
    translateX: ['0', '20px', '0'],
    rotate: ['-5deg', '5deg', '-5deg'],
    duration: 8000,
    loop: true,
    easing: 'easeInOutSine'
  });
  
  // Nav Link Underline Animation
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
      anime({
        targets: link,
        translateY: -5,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
    link.addEventListener('mouseleave', () => {
      anime({
        targets: link,
        translateY: 0,
        duration: 300,
        easing: 'easeOutExpo'
      });
    });
  });
  
  // Theme Toggler
  document.getElementById('theme-toggler').addEventListener('click', () => {
    const body = document.body;
    body.setAttribute('data-theme', body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    anime({
      targets: '#theme-toggler i',
      rotate: '+=180',
      duration: 500
    });
  });
  
  // Hero Text Animation
  anime.timeline()
    .add({
      targets: '#hero-title',
      translateY: [-50, 0],
      opacity: [0, 1],
      duration: 1500,
      easing: 'easeOutExpo'
    })
    .add({
      targets: '#hero-subtitle',
      translateY: [20, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: 'easeOutExpo'
    }, '-=1000');
  
  // CTA Button Pulse Effect
  anime({
    targets: '#cta-button',
    scale: [1, 1.05, 1],
    duration: 2000,
    loop: true,
    easing: 'easeInOutSine'
  });
  
  // Mobile Menu Toggle (Hamburger)
  document.querySelector('.menu-toggle').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    anime({
      targets: '.menu-toggle .bar',
      rotate: ['0deg', '45deg'],
      translateY: ['0px', '8px'],
      duration: 300,
      easing: 'easeInOutQuad'
    });
  });
  
  // Scroll-Triggered Card Animations
  window.addEventListener('scroll', () => {
    document.querySelectorAll('.mission-card').forEach((card, i) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (cardPosition < screenPosition) {
        anime({
          targets: card,
          translateY: [100, 0],
          opacity: [0, 1],
          delay: i * 200,
          duration: 1000,
          easing: 'easeOutExpo'
        });
      }
    });
  });