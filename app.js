document.addEventListener('DOMContentLoaded', function () {

  // MY ACTIVITIES - SCRAMBLE TEXT
  class TextScramble {
    constructor(el) {
      this.el = el
      this.chars = '!<>-_\\/[]{}—=+*^?#________'
      this.update = this.update.bind(this)
    }
    setText(newText) {
      const oldText = this.el.innerText
      const length = Math.max(oldText.length, newText.length)
      const promise = new Promise((resolve) => this.resolve = resolve)
      this.queue = []
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || ''
        const to = newText[i] || ''
        const start = Math.floor(Math.random() * 40)
        const end = start + Math.floor(Math.random() * 35)
        this.queue.push({ from, to, start, end })
      }
      cancelAnimationFrame(this.frameRequest)
      this.frame = 0
      this.update()
      return promise
    }
    update() {
      let output = ''
      let complete = 0
      for (let i = 0, n = this.queue.length; i < n; i++) {
        let { from, to, start, end, char } = this.queue[i]
        if (this.frame >= end) {
          complete++
          output += to
        } else if (this.frame >= start) {
          if (!char || Math.random() < 0.28) {
            char = this.randomChar()
            this.queue[i].char = char
          }
          output += `<span class="chars">${char}</span>`
        } else {
          output += from
        }
      }
      this.el.innerHTML = output
      if (complete === this.queue.length) {
        this.resolve()
      } else {
        this.frameRequest = requestAnimationFrame(this.update)
        this.frame++
      }
    }
    randomChar() {
      return this.chars[Math.floor(Math.random() * this.chars.length)]
    }
  }

  // MY ACTIVITIES - TEXTS

  const phrases = [
    'Digital technologies',
    'Frontend Development',
    'Software implementation',
    'Email marketing',
    'Explore my portfolio!',
  ]

  const el = document.querySelector('.scrambleText')
  const fx = new TextScramble(el)


  let counter = 0
  const next = () => {
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 3500)
    })
    counter = (counter + 1) % phrases.length
  }

  next()


  // TWINKLE RANDOM COLORED STARS ANIMATION
  const starsAnimation = document.getElementById("stars");

  let stars = ["✶", "✷"];
  
  for (let i = 0; i < 200; i++) {
      const element = document.createElement("div");
      starsColor='rgb('+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+','+Math.round(Math.random()*255)+')';
      element.style.color = starsColor;
      element.style.top = `${Math.random() * 100}%`;
      element.style.left = `${Math.random() * 100}%`;
      let sizeX = Math.random() * 8 + 1;
      element.innerHTML = stars[~~(Math.random() * stars.length)];
      element.style.fontSize = sizeX + "px";
      starsAnimation.appendChild(element);
      element.style.animation = `${
        8000 / sizeX + Math.random() * (8000 / sizeX)
    }ms linear ${Math.random() * 8000}ms alternate infinite stars-twinkle`;
      element.setAttribute("class", "star");
  }
  
  

});