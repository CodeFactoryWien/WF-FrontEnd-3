import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
    this.popUpWindow()
   }

    ngOnInit() {
  	  class TextScramble {
        el:any
        chars:any
        queue:any
        resolve:any
        frameRequest:any
        frame:any
  constructor(el:any) {
    this.el = el
    this.chars = '&#x2141;!<>-_\\/[]&#x2141;{}—=+*^?&#x2141;#________'
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
      const end = start + Math.floor(Math.random() * 40)
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
        output += `<span class="dud">${char}</span>`
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

// ——————————————————————————————————————————————————
// Message
// ——————————————————————————————————————————————————

const phrases = [
  '&#x2141; Script',
  'the newest way of coding',
  'stay smooth and become a grasliner',
  'be amazed by the power of the new',
  'GS6 - GrasScript'
]

const el = document.querySelector('.text')
const fx = new TextScramble(el)

let counter = 0
const next = () => {
  fx.setText(phrases[counter]).then(() => {
    setTimeout(next, 1300)
  })
  counter = (counter + 1) % phrases.length
}

next() 
  }

  scrollDown() {
    document.querySelector('header').scrollIntoView({ block: 'start', behavior: 'smooth'})
  }

  actionCode:string = (Math.random() * 2531).toFixed(3).split('.').join('')
  actionProcent:Number = Math.floor(Math.random() * 15 + 10)
  popUpWindow() {
    let popup = setInterval(() => {
      document.getElementById('popUpWindow').style.display="block",
      clearInterval(popup),
      document.getElementById('popUpWindow').scrollIntoView({block: 'center'})
    }, 100000)
  }

  closePopUp() {
    document.getElementById('popUpWindow').style.display = "none"
  }

}
