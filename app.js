document.addEventListener('DOMContentLoaded', function () {

  // 1. GENERARE STELUTE - START
  function initStars() {
    const starsContainer = document.getElementById("stars");
    if (!starsContainer) return;

    const colors = ["springgreen", "cyan", "magenta", "red", "purple", "royalblue", "orange", "gold"];
    const symbols = ["✶", "✷"];

    for (let i = 0; i < 150; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.position = "absolute";

      // APARITIE ALEATORIE STELE
      const teleport = (el) => {
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = Math.random() * 100 + "vh";
        el.style.color = colors[Math.floor(Math.random() * colors.length)];
      };

      // POZITIONARE INITIALA
      teleport(star);

      const size = Math.random() * 4 + 3;
      star.style.fontSize = size + "px";
      star.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];

      const duration = 2000 + Math.random() * 3000;
      const delay = Math.random() * 5000;
      star.style.animation = `stars-twinkle ${duration}ms ease-in-out ${delay}ms infinite`;

      // --- TELEPORTARE STELUTE ---
      star.addEventListener('animationiteration', () => {
        teleport(star);
      });

      starsContainer.appendChild(star);
    }
  }

  // INITIALIZARE GENERATOR STELUTE
  initStars();
  // 1. GENERARE STELUTE - STOP

  // 2. GENERARE TEXT SCRAMBLE - START
  class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = '!<>-_\\/[]{}—=+*^?#________';
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => this.resolve = resolve);
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || '';
        const to = newText[i] || '';
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 35);
        this.queue.push({ from, to, start, end });
      }
      cancelAnimationFrame(this.frameRequest);
      this.frame = 0;
      this.update();
      return promise;
    }
    update() {
      let output = '';
      let complete = 0;
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i];
        if (this.frame >= end) {
          complete++;
          output += to;
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar();
            this.queue[i].char = char;
          }
          output += `<span class="chars">${char}</span>`;
        } else {
          output += from;
        }
      }
      this.el.innerHTML = output;
      if (complete === this.queue.length) {
        this.resolve();
      } else {
        this.frameRequest = requestAnimationFrame(this.update);
        this.frame++;
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
  }

  const phrases = [
    'Technical support',
    'Frontend development',
    'Training & Coaching',
    'Cookie management',
    'Data analytics',
    'Email marketing'
  ];

  const el = document.querySelector('.scrambleText');
  if (el) {
    const fx = new TextScramble(el);
    let counter = 0;
    const next = () => {
      fx.setText(phrases[counter]).then(() => {
        setTimeout(next, 3500);
      });
      counter = (counter + 1) % phrases.length;
    };
    next();
  }
  // 2. GENERARE TEXT SCRAMBLE - STOP

 const containers = document.querySelectorAll('.animation-container');
    let currentIndex = 0;
    const animationDuration = 3500; 

    function playSequentialAnimation() {
        containers.forEach(container => container.classList.remove('active'));
        containers[currentIndex].classList.add('active');
        currentIndex = (currentIndex + 1) % containers.length;
        setTimeout(playSequentialAnimation, animationDuration);
    }
    
     if(containers.length > 0) {
        playSequentialAnimation();
    }

    
});


